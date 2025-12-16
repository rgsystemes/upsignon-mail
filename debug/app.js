import { buildEmail } from '/dist/index.js';

const templates = [
  {
    id: 'trialWelcome',
    label: 'trialWelcome — accueil période d’essai',
    defaults: { trialEndDate: '2026-01-01', link: 'https://www.google.com' },
  },
  {
    id: 'newDevice',
    label: 'newDevice — code pour nouveau device',
    defaults: { deviceName: 'MacBook Air', availableCodeDate: '2026-01-02 12:00', code: '123 456' },
  },
  {
    id: 'resetPassword',
    label: 'resetPassword — code de réinitialisation',
    defaults: { deviceName: 'iPhone 15', code: '987 654' },
  },
  {
    id: 'pendingDeviceRequest',
    label: 'pendingDeviceRequest — demande en attente',
    defaults: { emailUser: 'contact@upsignon.com' },
  },
  {
    id: 'masterPasswordSupport',
    label: 'masterPasswordSupport — aide mot de passe maître',
    defaults: { emailUser: 'contact@upsignon.com' },
  },
  {
    id: 'proAdminInvitation',
    label: 'proAdminInvitation — invitation admin pro',
    defaults: {},
  },
];

const locales = ['fr', 'en'];

const templateSelect = document.getElementById('template');
const localeSelect = document.getElementById('locale');
const argsField = document.getElementById('args');
const statusText = document.getElementById('status-text');
const selectionPill = document.getElementById('current-selection');
const preview = document.getElementById('preview');
const errorBox = document.getElementById('error');
const renderBtn = document.getElementById('render');
const copyBtn = document.getElementById('copy');

const stringify = (obj) => JSON.stringify(obj, null, 2);

function populate() {
  templates.forEach(t => {
    const opt = document.createElement('option');
    opt.value = t.id;
    opt.textContent = t.label;
    templateSelect.appendChild(opt);
  });
  locales.forEach(l => {
    const opt = document.createElement('option');
    opt.value = l;
    opt.textContent = l.toUpperCase();
    localeSelect.appendChild(opt);
  });
  templateSelect.value = templates[0].id;
  localeSelect.value = 'fr';
  argsField.value = stringify(templates[0].defaults);
  updateSelectionPill();
}

function updateSelectionPill() {
  selectionPill.textContent = `${templateSelect.value} · ${localeSelect.value}`;
}

function setDefaultsForTemplate(templateId) {
  const found = templates.find(t => t.id === templateId);
  argsField.value = stringify(found?.defaults ?? {});
}

function showError(message = '') {
  errorBox.style.display = message ? 'block' : 'none';
  errorBox.textContent = message;
}

async function renderEmail() {
  showError('');
  const template = templateSelect.value;
  const locale = localeSelect.value;
  updateSelectionPill();

  let args = {};
  try {
    args = argsField.value.trim() ? JSON.parse(argsField.value) : {};
  } catch (err) {
    showError('Arguments JSON invalides : ' + err.message);
    return;
  }

  statusText.textContent = 'Génération en cours…';
  preview.innerHTML = '⏳';

  try {
    const html = await buildEmail(template, locale, args);
    preview.innerHTML = html;
    statusText.textContent = `Dernière génération : ${new Date().toLocaleTimeString()}`;
  } catch (err) {
    showError('Erreur lors du rendu : ' + (err?.message ?? err));
    statusText.textContent = 'Erreur';
    preview.innerHTML = '';
  }
}

async function copyHtml() {
  const html = preview.innerHTML;
  if (!html) {
    showError('Rien à copier : génère un email d’abord.');
    return;
  }
  try {
    await navigator.clipboard.writeText(html);
    statusText.textContent = 'HTML copié dans le presse-papiers ✅';
  } catch (err) {
    showError('Impossible de copier : ' + (err?.message ?? err));
  }
}

templateSelect.addEventListener('change', () => {
  setDefaultsForTemplate(templateSelect.value);
  renderEmail();
});
localeSelect.addEventListener('change', renderEmail);
renderBtn.addEventListener('click', renderEmail);
copyBtn.addEventListener('click', copyHtml);

populate();
renderEmail();

