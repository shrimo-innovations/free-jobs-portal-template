const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

$('#mobileToggle')?.addEventListener('click', () => $('#mainNav')?.classList.toggle('open'));

const savedKey = 'shrimoJobPortalSavedJobs';
const getSaved = () => JSON.parse(localStorage.getItem(savedKey) || '[]');
const setSaved = (items) => localStorage.setItem(savedKey, JSON.stringify(items));

function refreshSavedButtons(){
  const saved = getSaved();
  $$('.save-job').forEach(btn => {
    const id = btn.dataset.jobId;
    const active = saved.includes(id);
    btn.textContent = active ? 'Saved' : 'Save Job';
    btn.classList.toggle('secondary', !active);
  });
}
$$('.save-job').forEach(btn => btn.addEventListener('click', () => {
  const id = btn.dataset.jobId;
  let saved = getSaved();
  saved = saved.includes(id) ? saved.filter(x => x !== id) : [...saved, id];
  setSaved(saved);
  refreshSavedButtons();
}));
refreshSavedButtons();

$('#jobSearchForm')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const keyword = $('#keyword')?.value?.toLowerCase() || '';
  const location = $('#location')?.value?.toLowerCase() || '';
  const type = $('#type')?.value || '';
  $$('.job-card-item').forEach(card => {
    const data = card.textContent.toLowerCase();
    const cardType = card.dataset.type || '';
    const ok = (!keyword || data.includes(keyword)) && (!location || data.includes(location)) && (!type || cardType === type);
    card.classList.toggle('hidden', !ok);
  });
});

$$('form[data-demo-form]').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault();
  const msg = form.querySelector('[data-form-message]');
  if(msg){ msg.textContent = 'Demo submitted successfully. Connect this form to Shrimo Jobs Manager REST APIs for production.'; msg.classList.remove('hidden'); }
  form.reset();
}));

const savedList = $('#savedJobsList');
if(savedList){
  const saved = getSaved();
  savedList.innerHTML = saved.length ? saved.map(id => `<li class="card flat"><strong>${id}</strong><br><span class="muted">Saved locally in this demo template.</span></li>`).join('') : '<li class="card flat muted">No saved jobs yet. Visit the Jobs page and save a listing.</li>';
}
