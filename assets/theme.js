(() => {
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let explicitChoice = false;
  try { explicitChoice = ['light', 'dark'].includes(localStorage.getItem('slsg-theme')); } catch {}

  function applyTheme(theme) {
    root.dataset.theme = theme;
    const dark = theme === 'dark';
    toggle.setAttribute('aria-pressed', String(dark));
    toggle.title = dark ? 'Switch to light mode' : 'Switch to dark mode';
  }

  applyTheme(root.dataset.theme);
  toggle.addEventListener('click', () => {
    explicitChoice = true;
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    try { localStorage.setItem('slsg-theme', theme); } catch {}
  });
  preference.addEventListener('change', event => {
    if (!explicitChoice) applyTheme(event.matches ? 'dark' : 'light');
  });
  window.addEventListener('storage', event => {
    if (event.key !== 'slsg-theme' && event.key !== null) return;
    explicitChoice = event.newValue === 'dark' || event.newValue === 'light';
    applyTheme(explicitChoice ? event.newValue : (preference.matches ? 'dark' : 'light'));
  });
})();
