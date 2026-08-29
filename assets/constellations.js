(() => {
  const filterGroup = document.querySelector('[data-constellation-filters]');
  const cards = [...document.querySelectorAll('[data-constellation-grid] .constellation-card')];
  if (filterGroup && cards.length) {
    const buttons = [...filterGroup.querySelectorAll('[data-filter]')];
    const applyFilter = (filter) => {
      buttons.forEach((button) => {
        const active = button.dataset.filter === filter;
        button.classList.toggle('is-active', active);
        button.setAttribute('aria-pressed', String(active));
      });
      cards.forEach((card) => {
        const visible = filter === 'all' || card.dataset.tags.split(' ').includes(filter);
        const wasHidden = card.hidden;
        card.hidden = !visible;
        if (visible && wasHidden && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          card.animate([
            { opacity: 0, transform: 'translateY(14px)' },
            { opacity: 1, transform: 'translateY(0)' }
          ], { duration: 360, easing: 'cubic-bezier(.2,.8,.2,1)' });
        }
      });
    };

    filterGroup.addEventListener('click', (event) => {
      const button = event.target.closest('[data-filter]');
      if (button) applyFilter(button.dataset.filter);
    });

    applyFilter('all');
  }

  const compass = document.querySelector('[data-constellation-compass]');
  if (!compass) return;

  const reading = compass.querySelector('[data-compass-reading]');
  const readingPanel = reading.closest('.compass-reading');
  const axes = [...compass.querySelectorAll('[data-compass-axis]')];
  const language = {
    home: [['many-home independence', 'connected homes', 'a flexible home pattern', 'a shared-home leaning', 'one strongly shared home'], 'Home'],
    time: [['a loose shared rhythm', 'light coordination', 'a flexible shared rhythm', 'coordinated days', 'highly coordinated daily life'], 'Time'],
    resources: [['mostly individual resources', 'selective sharing', 'a mixed resource model', 'substantial pooling', 'a deeply pooled household economy'], 'Resources'],
    bonds: [['strongly distinct relationships', 'mostly distinct bonds', 'a balance of distinct bonds and group identity', 'a strong group identity', 'one highly integrated relationship constellation'], 'Relationships'],
    care: [['adult relationships at the centre', 'an adult-led family rhythm', 'a balance of adult life and shared care', 'care and parenting near the centre', 'parenting and care at the family centre'], 'Family centre']
  };

  const updateCompass = () => {
    reading.innerHTML = axes.map((axis) => {
      const [phrases, label] = language[axis.dataset.compassAxis];
      axis.setAttribute('aria-valuetext', phrases[Number(axis.value)]);
      return `<p><strong>${label}</strong><span>${phrases[Number(axis.value)]}</span></p>`;
    }).join('');
    readingPanel.classList.remove('is-changing');
    void readingPanel.offsetWidth;
    readingPanel.classList.add('is-changing');
  };

  axes.forEach((axis) => axis.addEventListener('input', updateCompass));
  updateCompass();
})();
