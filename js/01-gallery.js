import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);

const refs = {
  galleryList: document.querySelector(".gallery"),
  galleryLink: document.querySelectorAll(".gallery__link"),
  lightBoxEl: document.querySelector(".basicLightbox--visible"),
};

function galleryMarkUpCreate(galleryItems) {
  const galleryMarkup = galleryItems
    .map(
      ({ original, preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");

  refs.galleryList.innerHTML = galleryMarkup;
}
galleryMarkUpCreate(galleryItems);

refs.galleryList.addEventListener("click", galleryItemClickHandler);

function galleryItemClickHandler(e) {
  e.preventDefault();
  const instance = basicLightbox.create(`
    <img src=${e.target.dataset.source} width="800" height="600">`);
  instance.show();

  window.addEventListener("keydown", onEscPress);
  function onEscPress(e) {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscPress);
    }
  }
}
