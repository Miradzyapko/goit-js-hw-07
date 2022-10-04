import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector ('.gallery');
const imagesMarkup = createImagesMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imagesMarkup);
//console.log(galleryContainer)//
galleryContainer.addEventListener('click', onGalleryContainerClick);
function createImagesMarkup(galleryItems) {
return galleryItems.map(({ preview, original, description }) => {
    return '<div class = "gallery__item"><a class="gallery__link" href = "${original}"><img class="gallery__image" src = "${preview}"data-sourse="${original}" alt="Image description"/></a></div>';
}).join('');
}
function onGalleryContainerClick(evt) {

    evt.preventDefault();
    if(evt.target.nodeName !=="IMG") 
    {const instance = basicLightbox.create('<img src = "${evt.target.dataset.source}" width="800" height="600"/>');
instance.show();
};
}