(() => {
  const header = document.querySelector('.site-header');
  const menu = document.querySelector('.site-menu');
  const floatingTop = document.querySelector('.floating-top');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (menu) {
    const trigger = menu.querySelector('summary');
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target)) menu.open = false;
    });
    menu.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || !menu.open) return;
      event.preventDefault();
      menu.open = false;
      trigger.focus();
    });
    menu.addEventListener('focusout', (event) => {
      if (event.relatedTarget && !menu.contains(event.relatedTarget)) menu.open = false;
    });
  }

  if (header) {
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
      header.classList.toggle('is-scrolled', scrollTop > 24);
      if (floatingTop) floatingTop.hidden = scrollTop < 360;
      progressLine.style.setProperty('--scroll-progress', String(Math.min(scrollTop / available, 1)));
      if (heroImage && !reducedMotion.matches) {
        heroImage.style.setProperty('--hero-parallax', Math.min(scrollTop * 0.035, 30) + 'px');
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

  if (reducedMotion.matches || !('IntersectionObserver' in window)) {
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
  if (lightPanel && window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reducedMotion.matches) {
    lightPanel.addEventListener('pointermove', (event) => {
      const bounds = lightPanel.getBoundingClientRect();
      const position = ((event.clientX - bounds.left) / bounds.width) - 0.5;
      lightPanel.style.setProperty('--light-shift', `${position * 22}%`);
    });
    lightPanel.addEventListener('pointerleave', () => lightPanel.style.setProperty('--light-shift', '0%'));
  }
})();
