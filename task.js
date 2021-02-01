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

console.log(galleryRef);
galleryRef.addEventListener('click', clickOnImg);
function clickOnImg(event) {
    console.log(event)
}



