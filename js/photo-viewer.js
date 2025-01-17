document.addEventListener("DOMContentLoaded", () => {
  const viewerContainers = document.querySelectorAll(".photo-viewer");

  viewerContainers.forEach((viewer) => {
    const mainImage = viewer.querySelector(".main-image");
    const thumbnails = viewer.querySelectorAll(".thumbnail");
    const images = Array.from(thumbnails).map((thumb) => thumb.dataset.src);
    let currentIndex = 0;

    const updateMainImage = (index) => {
      currentIndex = index;
      mainImage.src = images[index];

      // Highlight active thumbnail
      thumbnails.forEach((thumb, i) => {
        thumb.classList.toggle("active", i === index);
      });
    };

    // Navigation arrows
    viewer.querySelector(".nav-arrow.left").addEventListener("click", () => {
      const newIndex = (currentIndex - 1 + images.length) % images.length;
      updateMainImage(newIndex);
    });

    viewer.querySelector(".nav-arrow.right").addEventListener("click", () => {
      const newIndex = (currentIndex + 1) % images.length;
      updateMainImage(newIndex);
    });

    // Thumbnail click
    thumbnails.forEach((thumb, index) => {
      thumb.addEventListener("click", () => updateMainImage(index));
    });

    // Initialize with the first image
    updateMainImage(0);
  });
});// JavaScript Document