(() => {
  const form = document.querySelector('[data-household-form]');
  if (!form) return;

  const steps = [...form.querySelectorAll('[data-lab-step]')];
  const back = form.querySelector('[data-lab-back]');
  const next = form.querySelector('[data-lab-next]');
  const progress = form.querySelector('[data-lab-progress]');
  const progressBar = progress.closest('[role="progressbar"]');
  const bar = form.querySelector('[data-lab-bar]');
  const output = document.querySelector('[data-lab-output]');
  const summaryHeading = document.querySelector('[data-lab-summary-heading]');
  const copyButton = document.querySelector('[data-lab-copy]');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let stepIndex = 0;
  let markdown = '';

  const escapeHtml = (text) => String(text)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');

  const checkedValues = (name) => [...form.querySelectorAll(`input[name="${name}"]:checked`)].map((input) => input.value);
  const value = (name) => form.elements[name]?.value.trim() || '';

  const renderSummary = () => {
    const purposes = checkedValues('purpose');
    const layers = checkedValues('layers');
    const adults = value('adults');
    const homes = value('homes');
    const children = value('children');
    const conversation = value('conversation');
    const principle = value('principle');

    markdown = [
      '# Our household starting point',
      '',
      `- Adult partners being explored: ${adults || 'To discuss'}`,
      `- Home pattern: ${homes || 'To discuss'}`,
      `- Children: ${children || 'To discuss'}`,
      '',
      '## What we want to make possible',
      ...(purposes.length ? purposes.map((item) => `- ${item}`) : ['- To discuss']),
      '',
      '## First practical conversations',
      ...(layers.length ? layers.map((item) => `- ${item}`) : ['- To discuss']),
      '',
      '## Our next honest conversation',
      conversation || 'To discuss',
      '',
      '## A principle nobody should lose',
      principle || 'To discuss'
    ].join('\n');

    output.innerHTML = `
      <dl class="summary-list">
        <div><dt>Adult partners</dt><dd>${escapeHtml(adults || 'To discuss')}</dd></div>
        <div><dt>Homes</dt><dd>${escapeHtml(homes || 'To discuss')}</dd></div>
        <div><dt>Children</dt><dd>${escapeHtml(children || 'To discuss')}</dd></div>
        <div><dt>Purpose</dt><dd>${escapeHtml(purposes.length ? purposes.join(', ') : 'To discuss')}</dd></div>
        <div><dt>First conversations</dt><dd>${escapeHtml(layers.length ? layers.join(', ') : 'To discuss')}</dd></div>
        <div><dt>Opening sentence</dt><dd>${escapeHtml(conversation || 'To discuss')}</dd></div>
        <div><dt>Protected principle</dt><dd>${escapeHtml(principle || 'To discuss')}</dd></div>
      </dl>`;
  };

  const showStep = ({ focusQuestion = false } = {}) => {
    steps.forEach((step, index) => step.classList.toggle('is-active', index === stepIndex));
    progress.textContent = `${stepIndex + 1} of ${steps.length}`;
    progressBar.setAttribute('aria-valuenow', String(stepIndex + 1));
    bar.style.width = `${((stepIndex + 1) / steps.length) * 100}%`;
    back.disabled = stepIndex === 0;
    next.textContent = stepIndex === steps.length - 1 ? 'Create my sketch' : 'Next question';
    if (focusQuestion) {
      const legend = steps[stepIndex].querySelector('legend');
      legend.setAttribute('tabindex', '-1');
      legend.focus();
    }
  };

  back.addEventListener('click', () => {
    if (stepIndex > 0) stepIndex -= 1;
    showStep({ focusQuestion: true });
  });

  next.addEventListener('click', () => {
    if (stepIndex < steps.length - 1) {
      stepIndex += 1;
      showStep({ focusQuestion: true });
      return;
    }
    renderSummary();
    copyButton.hidden = false;
    summaryHeading.focus({ preventScroll: true });
    output.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'nearest' });
  });

  form.addEventListener('input', () => {
    if (!copyButton.hidden) renderSummary();
  });

  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      copyButton.textContent = 'Copied';
      window.setTimeout(() => { copyButton.textContent = 'Copy as Markdown'; }, 1800);
    } catch {
      copyButton.textContent = 'Select and copy the summary above';
    }
  });

  showStep();
})();
