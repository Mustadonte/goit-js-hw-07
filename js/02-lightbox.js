import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryList: document.querySelector(".gallery"),
  galleryItem: document.querySelector(".gallery__item"),
};

function createGalleryMarkup(items) {
  const galleryMarkup = items
    .map(
      (item) => `<li><a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt="${item.description}" />
</a></li>`
    )
    .join("");

  refs.galleryList.innerHTML = galleryMarkup;
}

createGalleryMarkup(galleryItems);

refs.galleryList.addEventListener("click", galleryClickHandler);

function galleryClickHandler(e) {
  e.preventDefault();
  let gallery = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
  });
  gallery.on("show.simplelightbox", function () {});
}
