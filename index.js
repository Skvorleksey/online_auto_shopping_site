const pictures = document.querySelectorAll(".pictire_gallery__image");
const picturesLinks = document.querySelectorAll(".pictire_gallery__link");
const picturesGallery = document.querySelector(".pictures_gallery__inner");
const picturesGalleryWindow = document.querySelector(".pictures_gallery__outer");


const moveGallery = ()=>{
    let galleryWindowWidth = picturesGalleryWindow.clientWidth;
    let galleryWindowHeight = picturesGalleryWindow.clientHeight;


    for (let link of picturesLinks){
        link.style.width = `${galleryWindowWidth}px`;
        link.style.height = `${galleryWindowHeight}px`;
    }

    for (let picture of pictures){
        picture.style.width = `${galleryWindowWidth}px`;
        picture.style.height = `${galleryWindowHeight}px`;
    }

    picturesGallery.style.width = `${picturesLinks.length * 100}%`;
    picturesGallery.style.height = `${galleryWindowHeight}px`;
}

moveGallery();
window.addEventListener('resize', moveGallery);