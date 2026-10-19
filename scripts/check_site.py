"""Check static page structure and local links without third-party dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote

ROOT = Path(__file__).resolve().parents[1]
class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.ids, self.links, self.errors = path, set(), [], []
        self.h1 = self.main = 0
        self.feed(path.read_text())
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'h1': self.h1 += 1
        if tag == 'main': self.main += 1
        if attrs.get('id'):
            if attrs['id'] in self.ids: self.errors.append(f'Duplicate id: {attrs["id"]}')
            self.ids.add(attrs['id'])
        for attr in ('href', 'src'):
            if attrs.get(attr): self.links.append(attrs[attr])

pages = {p.name: Page(p) for p in ROOT.glob('*.html')}
errors = []
for name, page in pages.items():
    errors.extend(f'{name}: {e}' for e in page.errors)
    if page.h1 != 1 or page.main != 1:
        errors.append(f'{name}: expected one h1 and one main')
    for link in page.links:
        url = urlsplit(link)
        if url.scheme or url.netloc: continue
        target = (page.path.parent / unquote(url.path)).resolve() if url.path else page.path
        if not target.exists():
            errors.append(f'{name}: missing target {link}')
        elif url.fragment and target.suffix == '.html':
            parsed = pages.get(target.name)
            if parsed and unquote(url.fragment) not in parsed.ids:
                errors.append(f'{name}: missing anchor {link}')
if errors:
    raise SystemExit('\n'.join(errors))
print(f'Passed: {len(pages)} pages, page landmarks, unique IDs, local files, and anchor links.')
