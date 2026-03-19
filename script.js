const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
//viaibility
menuOpenButton.addEventListener("click", () => {
    document.body.classList.toggle("show-mobile-menu");
});
//click menu close
menuCloseButton.addEventListener("click", () => menuOpenButton.click());
//close navlink 
// Select modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const images = document.querySelectorAll(".menu-image");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

// open photo
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    currentIndex = index;
  });
});

// close
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close when you click on the background
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// previous picture
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentIndex].src;
});

// Snext picture
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  modalImg.src = images[currentIndex].src;
});
