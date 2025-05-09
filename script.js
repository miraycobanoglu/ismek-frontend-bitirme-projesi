
function openModal(src) {
    document.getElementById('modalImage').src = src;
    document.getElementById('lightboxModal').classList.remove('hidden');
  }
  function closeModal() {
    document.getElementById('lightboxModal').classList.add('hidden');
  }





  const menuIcon = document.getElementById("mobil-menu-icon");
  const mobileMenu = document.getElementById("mobil-menu");

  menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });




  
  document.addEventListener('DOMContentLoaded', function () {
    const latestBtnList = document.querySelectorAll('#latest-button');
    const popularBtnList = document.querySelectorAll('#popular-button');
    const bestBtnList = document.querySelectorAll('#best-button');

    const latestSection = document.querySelector('.movies-section-latest');
    const popularSection = document.querySelector('.movies-section-popular');
    const bestSection = document.querySelector('.movies-section-best');

    function showSection(target) {
      latestSection.classList.add('hidden');
      popularSection.classList.add('hidden');
      bestSection.classList.add('hidden');

      target.classList.remove('hidden');
    }

    latestBtnList.forEach(btn => btn.addEventListener('click', e => {
      e.preventDefault();
      showSection(latestSection);
    }));

    popularBtnList.forEach(btn => btn.addEventListener('click', e => {
      e.preventDefault();
      showSection(popularSection);
    }));

    bestBtnList.forEach(btn => btn.addEventListener('click', e => {
      e.preventDefault();
      showSection(bestSection);
    }));
  });

