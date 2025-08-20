// Year
const y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
// Experience accordion
document.querySelectorAll('.exp-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const li = btn.closest('.exp');
    const isOpen = li.classList.contains('open');
    document.querySelectorAll('.exp.open').forEach(n => n.classList.remove('open'));
    if (!isOpen) li.classList.add('open');
  });
});
// Projects click-to-expand on mobile
document.querySelectorAll('.proj-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const li = btn.closest('.proj');
    const isOpen = li.classList.contains('open');
    document.querySelectorAll('.proj.open').forEach(n => n.classList.remove('open'));
    if (!isOpen) li.classList.add('open');
  });
});