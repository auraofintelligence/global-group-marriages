(() => {
  const headerTarget = document.querySelector('[data-site-header]');
  const footerTarget = document.querySelector('[data-site-footer]');
  const rootPath = document.documentElement.dataset.root || '';

  if (headerTarget) {
    headerTarget.innerHTML = `
      <header class="site-header">
        <div class="site-header-inner">
          <a class="brand" href="${rootPath}index.html" aria-label="Global Group Marriages home">
            <img src="${rootPath}assets/favicon-192.png" alt="">
            <span>Global Group Marriages</span>
          </a>
          <button class="menu-button" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu"><span></span></button>
          <nav class="site-nav" id="site-nav" aria-label="Primary navigation">
            <a href="${rootPath}why-now.html">Why now</a>
            <a href="${rootPath}framework.html">Framework</a>
            <a href="${rootPath}constellations.html">Constellations</a>
            <a href="${rootPath}world-atlas.html">World atlas</a>
            <a class="nav-highlight" href="${rootPath}household-lab.html">Household Lab</a>
            <a href="${rootPath}un-of-love.html">U.N. of Love</a>
            <a href="${rootPath}gajra-earth.html">GAJRA Earth</a>
            <a href="${rootPath}research-method.html">Research</a>
          </nav>
        </div>
      </header>`;

    const menuButton = headerTarget.querySelector('.menu-button');
    const nav = headerTarget.querySelector('.site-nav');
    const brand = headerTarget.querySelector('.brand');
    const mobileNavigation = window.matchMedia('(max-width: 1120px)');
    const backgroundRegions = [document.querySelector('main'), footerTarget].filter(Boolean);
    const setBackgroundInert = (inert) => backgroundRegions.forEach((region) => region.toggleAttribute('inert', inert));
    const syncNavigationState = () => {
      const menuIsOpen = menuButton.getAttribute('aria-expanded') === 'true';
      nav.toggleAttribute('inert', mobileNavigation.matches && !menuIsOpen);
    };
    const closeMenu = ({ returnFocus = false } = {}) => {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
      nav.classList.remove('is-open');
      document.body.classList.remove('menu-open');
      brand.removeAttribute('inert');
      setBackgroundInert(false);
      syncNavigationState();
      if (returnFocus && mobileNavigation.matches) menuButton.focus();
    };

    menuButton.addEventListener('click', () => {
      const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', String(!isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
      nav.classList.toggle('is-open', !isOpen);
      document.body.classList.toggle('menu-open', !isOpen);
      brand.toggleAttribute('inert', !isOpen);
      setBackgroundInert(!isOpen);
      syncNavigationState();
      if (!isOpen) window.requestAnimationFrame(() => nav.querySelector('a')?.focus());
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') closeMenu({ returnFocus: true });
    });

    mobileNavigation.addEventListener('change', () => {
      if (!mobileNavigation.matches) closeMenu();
      else syncNavigationState();
    });
    syncNavigationState();

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    nav.querySelectorAll('a').forEach((link) => {
      const linkPage = link.getAttribute('href').split('/').pop();
      if (linkPage === currentPage || (document.body.classList.contains('country-page') && linkPage === 'world-atlas.html')) {
        link.setAttribute('aria-current', 'page');
      }
    });

    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    progress.setAttribute('aria-hidden', 'true');
    progress.innerHTML = '<i></i>';
    document.body.append(progress);
    const progressLine = progress.querySelector('i');
    const heroImage = document.querySelector('.hero-background, .page-hero-image');
    let scrollFramePending = false;
    const updateScrollEffects = () => {
      const scrollTop = window.scrollY;
      const available = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      headerTarget.querySelector('.site-header').classList.toggle('is-scrolled', scrollTop > 24);
      progressLine.style.setProperty('--scroll-progress', String(Math.min(scrollTop / available, 1)));
      if (heroImage && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        heroImage.style.setProperty('--hero-parallax', `${Math.min(scrollTop * 0.035, 30)}px`);
      }
      scrollFramePending = false;
    };
    window.addEventListener('scroll', () => {
      if (scrollFramePending) return;
      scrollFramePending = true;
      window.requestAnimationFrame(updateScrollEffects);
    }, { passive: true });
    updateScrollEffects();
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
            <a href="${rootPath}framework.html">The framework</a>
            <a href="${rootPath}world-atlas.html">World atlas</a>
            <a href="${rootPath}household-lab.html">Household Lab</a>
            <a href="${rootPath}un-of-love.html">U.N. of Love</a>
            <a href="${rootPath}gajra-earth.html">GAJRA Earth</a>
          </div>
          <div>
            <h2>Principles</h2>
            <p>Love, play, learn, teach.</p>
            <p>Imagine, design, create, share.</p>
            <a href="${rootPath}LICENSE">Strange But True Public Source Licence</a>
          </div>
        </div>
        <div class="wrap footer-bottom">
          <span>Concept by Luke Nathan Hayes / Aura of Intelligence</span>
          <a class="back-to-top" href="#main-content">Back to top</a>
        </div>
      </footer>`;
  }

  const spectrum = document.querySelector('[data-recognition-spectrum]');
  if (spectrum) {
    const range = spectrum.querySelector('[data-spectrum-range]');
    const title = spectrum.querySelector('[data-spectrum-title]');
    const description = spectrum.querySelector('[data-spectrum-description]');
    const positions = [
      ['Private relationship', 'The relationship is real to the people involved, while public law gives the group no shared adult status.'],
      ['Private legal tools', 'Contracts, co-ownership, wills and appointments organise selected rights without creating a family status.'],
      ['Overlapping pairwise rights', 'Several pairwise relationships may hold legal weight, but the law does not recognise the family as one group.'],
      ['Limited plural recognition', 'A local, customary or issue-specific rule recognises part of a multi-adult family without full civil status.'],
      ['Multi-adult civil status', 'The law recognises the adult family as one relationship with shared public rights and duties.']
    ];

    const updateSpectrum = () => {
      const [nextTitle, nextDescription] = positions[Number(range.value)];
      title.textContent = nextTitle;
      description.textContent = nextDescription;
      range.setAttribute('aria-valuetext', nextTitle);
      title.classList.remove('is-changing');
      void title.offsetWidth;
      title.classList.add('is-changing');
    };

    range.addEventListener('input', updateSpectrum);
    updateSpectrum();
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = [...document.querySelectorAll([
    '.split-intro > *',
    '.section-heading',
    '.prose-intro',
    '.evidence-card',
    '.feature-card',
    '.recognition-card',
    '.path-card',
    '.idea-card',
    '.constellation-card',
    '.country-card',
    '.story-card',
    '.lane-card',
    '.gajra-link-card',
    '.barrier-grid article',
    '.compact-grid article',
    '.organ-grid article',
    '.country-status-grid article',
    '.country-section',
    '.statement-panel',
    '.source-callout'
  ].join(','))];

  revealTargets.forEach((target, index) => {
    target.classList.add('reveal-ready');
    target.style.setProperty('--reveal-delay', `${(index % 5) * 70}ms`);
  });

  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((target) => target.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealTargets.forEach((target) => revealObserver.observe(target));
  }

  const lightPanel = document.querySelector('.recognition-card');
  if (lightPanel && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reducedMotion) {
    lightPanel.addEventListener('pointermove', (event) => {
      const bounds = lightPanel.getBoundingClientRect();
      const position = ((event.clientX - bounds.left) / bounds.width) - 0.5;
      lightPanel.style.setProperty('--light-shift', `${position * 22}%`);
    });
    lightPanel.addEventListener('pointerleave', () => lightPanel.style.setProperty('--light-shift', '0%'));
  }
})();
