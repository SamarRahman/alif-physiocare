// Smooth animation on page load
    window.addEventListener("load", () => {
      document.getElementById("aboutBox").classList.add("show");
    });

    // Toggle Read More / Read Less
    const btn = document.getElementById("toggleBtn");
    const hiddenText = document.querySelector(".hidden-text");

    btn.addEventListener("click", () => {
      if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "inline";
        btn.textContent = "Read Less";
      } else {
        hiddenText.style.display = "none";
        btn.textContent = "Read More";
      }
    });

    //status counter
     const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      counter.innerText = '0';
      const updateCounter = () => {
        const target = +counter.getAttribute('data-count');
        const current = +counter.innerText;
        const increment = Math.ceil(target / 200);

        if (current < target) {
          counter.innerText = `${Math.min(current + increment, target)}`;
          setTimeout(updateCounter, 80);
        }
      };
      updateCounter();
    });
    function showSidebar(){
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='flex';
}
function hideSidebar(){
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display='none';
}