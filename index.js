const pictures = document.querySelectorAll(".pictire_gallery__image");
const picturesLinks = document.querySelectorAll(".pictire_gallery__link");
const picturesGallery = document.querySelector(".pictures_gallery__inner");
const picturesGalleryWindow = document.querySelector(".pictures_gallery__outer");
let gallerySlide = 0;

const picturesGalleryArrowLeft = document.querySelector(".pictures_gallery__arrow_left");
const picturesGalleryArrowRight = document.querySelector(".pictures_gallery__arrow_right");


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

    picturesGallery.style.transform = `translateX(${gallerySlide * galleryWindowWidth * -1}px)`;
}

moveGallery();
window.addEventListener('resize', moveGallery);
picturesGalleryArrowLeft.addEventListener('click',()=> {
    if (gallerySlide > 0){
        gallerySlide -= 1;
    }
    else{
        gallerySlide = picturesLinks.length - 1;
    }
    moveGallery();
})

picturesGalleryArrowRight.addEventListener('click',()=> {
    if (gallerySlide < picturesLinks.length-1){
        gallerySlide += 1;
    }
    else{
        gallerySlide = 0;
    }
    moveGallery();
})
