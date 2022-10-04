import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const imagesMarkup = createImagesMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);
//console.log(galleryContainer)//
galleryContainer.addEventListener('click', onGalleryContainerClick);
function createImagesMarkup(galleryItems) {
return galleryItems.map(( {preview, original, description}) => {
    return '<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}"alt="${description}"/></a></li>';
}).join('');
}
function onGalleryContainerClick(evt) {

    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") 
 return
    }
        const lightbox = new SimpleLightbox(".gallery a", {

            captionsData: "alt",
            captionDelay: 250,
            captionPosition: "bottom",
        })

     


