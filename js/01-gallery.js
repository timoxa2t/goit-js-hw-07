import { galleryItems } from "./gallery-items.js";
// Change code below this line

let instance;

function openModalImage(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  instance = basicLightbox.create(`
       <img src=${event.target.dataset.source}>
    `);

  instance.show();
}

function dockKeypressHandler(event) {
  if (event.key === "Escape" && instance && instance.show) {
    instance.close();
  }
}

const galeryEl = document.querySelector("div.gallery");

const images = galleryItems
  .map(
    ({ preview, original, description }) =>
      `
    <div class="galery__item">
        <a class="galery__link" href="${original}">
            <img 
                class="gallery__image" 
                src="${preview}" 
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>
`
  )
  .join("");

galeryEl.insertAdjacentHTML("afterbegin", images);
galeryEl.addEventListener("click", openModalImage);
document.addEventListener("keydown", dockKeypressHandler);
