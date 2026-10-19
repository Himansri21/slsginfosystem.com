"""Validate static SEO metadata, schema references, and sitemap coverage."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit
import json
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
BASE = 'https://slsginfosystem.com/'
class Metadata(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.titles, self.descriptions, self.canonicals, self.schemas = [], [], [], []
        self.collect = None
        self.in_head = False
        self.buffer = ''
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'head': self.in_head = True
        if not self.in_head: return
        if tag == 'title' or (tag == 'script' and a.get('type') == 'application/ld+json'):
            self.collect, self.buffer = tag, ''
        if tag == 'meta' and a.get('name') == 'description': self.descriptions.append(a['content'])
        if tag == 'link' and a.get('rel') == 'canonical': self.canonicals.append(a['href'])
    def handle_data(self, data):
        if self.collect: self.buffer += data
    def handle_endtag(self, tag):
        if tag == 'head': self.in_head = False
        if tag == self.collect:
            if tag == 'title': self.titles.append(self.buffer)
            else: self.schemas.append(json.loads(self.buffer))
            self.collect = None

titles, descriptions, urls = set(), set(), set()
for path in ROOT.glob('*.html'):
    page = Metadata(path.read_text())
    assert len(page.titles) == len(page.descriptions) == len(page.canonicals) == len(page.schemas) == 1, path.name
    assert page.titles[0] not in titles and page.descriptions[0] not in descriptions, path.name
    titles.add(page.titles[0]); descriptions.add(page.descriptions[0])
    expected = BASE + ('' if path.name == 'index.html' else path.name)
    assert page.canonicals == [expected], path.name
    urls.add(expected)
    graph = page.schemas[0]['@graph']
    assert any(node.get('url') == expected for node in graph), path.name
    if path.name.startswith('story-'):
        article = next(node for node in graph if node['@type'] == 'BlogPosting')
        assert article['author']['name'] == 'SLSG Infosystems Pvt. Ltd.'
    for node in graph:
        if node['@type'] == 'BreadcrumbList':
            for item in node['itemListElement']:
                target = urlsplit(item['item']).path.strip('/') or 'index.html'
                assert (ROOT / target).is_file(), target
sitemap = ET.parse(ROOT / 'sitemap.xml')
assert {n.text for n in sitemap.findall('.//{*}loc')} == urls
assert BASE + 'sitemap.xml' in (ROOT / 'robots.txt').read_text()
print(f'Passed: {len(urls)} unique titles/descriptions, production canonicals, JSON-LD, breadcrumb targets, and sitemap coverage.')
