(() => {
  const headerTarget = document.querySelector('[data-site-header]');
  const footerTarget = document.querySelector('[data-site-footer]');

  if (headerTarget) {
    headerTarget.innerHTML = `
      <header class="site-header">
        <div class="site-header-inner">
          <a class="brand" href="index.html" aria-label="Global Group Marriages home">
            <img src="assets/favicon-192.png" alt="">
            <span>Global Group Marriages</span>
          </a>
          <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu"><span></span></button>
          <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
            <a href="#why-now">Why now</a>
            <a href="#framework">The framework</a>
            <a href="#world-atlas">World atlas</a>
            <a href="#explore">U.N. of Love</a>
            <a class="nav-highlight" href="#explore">Explore</a>
          </nav>
        </div>
      </header>`;

    const menuButton = headerTarget.querySelector('.menu-button');
    const nav = headerTarget.querySelector('.site-nav');
    const closeMenu = () => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      nav.classList.remove('is-open');
      document.body.classList.remove('menu-open');
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
      nav.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMenu();
    });
  }

  if (footerTarget) {
    footerTarget.innerHTML = `
      <footer class="site-footer">
        <div class="wrap footer-grid">
          <div>
            <p class="footer-brand">Global Group Marriages</p>
            <p>A pro-group-marriage exploration of larger families, shared care and self-sovereign love.</p>
          </div>
          <div>
            <h2>Explore</h2>
            <a href="#framework">The framework</a>
            <a href="#world-atlas">World atlas</a>
            <a href="#explore">U.N. of Love</a>
          </div>
          <div>
            <h2>Principles</h2>
            <p>Love, play, learn, teach.</p>
            <p>Imagine, design, create, share.</p>
            <a href="LICENSE">Strange But True Public Source Licence</a>
          </div>
        </div>
        <div class="wrap footer-bottom">
          <span>Concept by Luke Nathan Hayes / Aura of Intelligence</span>
          <a class="back-to-top" href="#main-content">Back to top</a>
        </div>
      </footer>`;
  }
})();
