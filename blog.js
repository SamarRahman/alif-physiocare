const questions = document.querySelectorAll('.faq-question');

questions.forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
function showSidebar(){
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='flex';
}
function hideSidebar(){
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='none';
}