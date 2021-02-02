import images from "./src/gallery-items.js";

const galleryRef = document.querySelector('.js-gallery');

const gallery = images.filter(image => {
    const galleryItem = document.createElement('li');
    galleryItem.classList = 'gallery__item';
    
    const itemA = document.createElement('a');
    itemA.classList = 'gallery__image';
    itemA.href = image.original;
    
    const aImg = document.createElement('img');
    aImg.classList = 'gallery__image';
    aImg.src = image.preview;
    aImg.dataSource = image.original;
    aImg.alt = image.description;
    
    itemA.append(aImg);
    galleryItem.append(itemA)
    galleryRef.append(galleryItem)
})
const lightBoXRef = document.querySelector('.lightbox__image');
galleryRef.addEventListener('click', clickOnImg);
function clickOnImg(event) {
    event.preventDefault()
        if (event.target.nodeName !== "IMG") return;
    // console.log(event.target.dataSource)

    
    lightBoXRef.src= event.target.dataSource;
    // console.log(lightBoXRef)

}

galleryRef.setAttribute('data-action', 'open-lightbox');

const lighttboxRef = document.querySelector('.js-lightbox');
const openModalRef = document.querySelector('.gallery[data-action="open-lightbox"]');
const closeModalRef = document.querySelector('.lightbox button[data-action="close-lightbox"]');

openModalRef.addEventListener('click', toggleModal);
closeModalRef.addEventListener('click', toggleModal);

function toggleModal() {
lighttboxRef.classList.toggle('is-open');
}

lightBoXRef.removeAttribute('src');