document.querySelector(".menu").addEventListener("click", () => {
    document.querySelectorAll(".target").forEach((item) => {
      item.classList.toggle("change");
    });
  });
  
  document.querySelectorAll(".wrapper").forEach((item) => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".target").forEach((item) => {
        item.classList.remove("change");
      });
    });
  });
  
  const videos = document.querySelectorAll(".video");
  
  videos.forEach((video) => {
    video.addEventListener("mouseover", () => {
      video.play();
    });
    video.addEventListener("mouseout", () => {
      video.pause();
    });
  });

  const carsList = document.querySelector('.cars-list');

  document.getElementById('.cars-list-btn').addEventListener('click', () => {
    carsList.classList.toggle('show-.cars-list');
});

  function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
    });
  }