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
  const answer = (text) => text || 'To discuss';

  const renderSummary = () => {
    const purposes = checkedValues('purpose');
    const layers = checkedValues('layers');
    const fields = {
      adults: answer(value('adults')),
      homes: answer(value('homes')),
      children: answer(value('children')),
      places: answer(value('places')),
      document: answer(value('document')),
      term: answer(value('term')),
      legalQuestion: answer(value('legalQuestion')),
      source: answer(value('source')),
      conversation: answer(value('conversation')),
      principle: answer(value('principle'))
    };
    markdown = [
      '# Our group household and research starting point',
      '',
      `- Adults being explored: ${fields.adults}`,
      `- Home pattern: ${fields.homes}`,
      `- Children: ${fields.children}`,
      `- Places and authorities to check: ${fields.places}`,
      '',
      '## What we want to make possible',
      ...(purposes.length ? purposes.map((item) => `- ${item}`) : ['- To discuss']),
      '',
      '## Commitments needing separate decisions',
      ...(layers.length ? layers.map((item) => `- ${item}`) : ['- To discuss']),
      '',
      '## Documents and evidence to check',
      `- First bill, agreement or business document: ${fields.document}`,
      `- Term, renewal, fee or exit condition: ${fields.term}`,
      `- Local legal or cultural question: ${fields.legalQuestion}`,
      `- Source and check date: ${fields.source}`,
      '',
      '## Next honest conversation',
      fields.conversation,
      '',
      '## A principle nobody should lose',
      fields.principle,
      '',
      'This is a private conversation brief, not a legal determination.'
    ].join('\n');

    output.innerHTML = `
      <dl class="summary-list">
        <div><dt>Adults</dt><dd>${escapeHtml(fields.adults)}</dd></div>
        <div><dt>Homes</dt><dd>${escapeHtml(fields.homes)}</dd></div>
        <div><dt>Children</dt><dd>${escapeHtml(fields.children)}</dd></div>
        <div><dt>Places</dt><dd>${escapeHtml(fields.places)}</dd></div>
        <div><dt>Purposes</dt><dd>${escapeHtml(answer(purposes.join(', ')))}</dd></div>
        <div><dt>Commitments</dt><dd>${escapeHtml(answer(layers.join(', ')))}</dd></div>
        <div><dt>Document</dt><dd>${escapeHtml(fields.document)}</dd></div>
        <div><dt>Term to check</dt><dd>${escapeHtml(fields.term)}</dd></div>
        <div><dt>Local question</dt><dd>${escapeHtml(fields.legalQuestion)}</dd></div>
        <div><dt>Source</dt><dd>${escapeHtml(fields.source)}</dd></div>
        <div><dt>Opening sentence</dt><dd>${escapeHtml(fields.conversation)}</dd></div>
        <div><dt>Protected principle</dt><dd>${escapeHtml(fields.principle)}</dd></div>
      </dl>`;
  };

  const showStep = ({ focusQuestion = false } = {}) => {
    steps.forEach((step, index) => step.classList.toggle('is-active', index === stepIndex));
    progress.textContent = `${stepIndex + 1} of ${steps.length}`;
    progressBar.setAttribute('aria-valuemax', String(steps.length));
    progressBar.setAttribute('aria-valuenow', String(stepIndex + 1));
    bar.style.width = `${((stepIndex + 1) / steps.length) * 100}%`;
    back.disabled = stepIndex === 0;
    next.textContent = stepIndex === steps.length - 1 ? 'Create our brief' : 'Next question';
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