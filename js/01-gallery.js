import { galleryItems } from './gallery-items.js';
// Change code below this line

const divRef = document.querySelector (`.gallery`);
const imagesMarkup = createImagesMarkup(galleryItems);
divRef.insertAdjacentHTML("beforeend", imagesMarkup);

divRef.addEventListener('click', onGalleryContainerClick);
function createImagesMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class ="gallery__item">
        <a class="gallery__link" href="${original}">
         <img class="gallery__image"
        src="${preview}" 
        data-source="${original}"
         alt="${description}" 
         />
         </a>
         </div>`;
}).join('');
}
function onGalleryContainerClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    
    }
    const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600"/>`);
    instance.show();
    
    divRef.addEventListener("keydown", (event) => {
        if (event.code === "Escape") {
            instance.close();
        }
    })
  
            }
         
        

    


 
    
