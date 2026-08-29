(() => {
  const search = document.querySelector('[data-country-search]');
  const filterGroup = document.querySelector('[data-atlas-filters]');
  const cards = [...document.querySelectorAll('[data-country-grid] .country-card')];
  const empty = document.querySelector('[data-atlas-empty]');
  if (!search || !filterGroup || !cards.length) return;

  let activeFilter = 'all';
  const apply = () => {
    const query = search.value.trim().toLocaleLowerCase('en-AU');
    filterGroup.querySelectorAll('[data-atlas-filter]').forEach((button) => {
      const active = button.dataset.atlasFilter === activeFilter;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    let visibleCount = 0;
    cards.forEach((card) => {
      const filterMatch = activeFilter === 'all' || card.dataset.tags.includes(activeFilter);
      const queryMatch = !query || `${card.textContent} ${card.dataset.tags}`.toLocaleLowerCase('en-AU').includes(query);
      const visible = filterMatch && queryMatch;
      const wasHidden = card.hidden;
      card.hidden = !visible;
      if (visible && wasHidden && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        card.animate([
          { opacity: 0, transform: 'translateY(14px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 360, easing: 'cubic-bezier(.2,.8,.2,1)' });
      }
      if (visible) visibleCount += 1;
    });
    empty.hidden = visibleCount !== 0;
  };

  filterGroup.addEventListener('click', (event) => {
    const button = event.target.closest('[data-atlas-filter]');
    if (!button) return;
    activeFilter = button.dataset.atlasFilter;
    filterGroup.querySelectorAll('[data-atlas-filter]').forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle('is-active', active);
      candidate.setAttribute('aria-pressed', String(active));
    });
    apply();
  });

  search.addEventListener('input', apply);
  apply();
})();
