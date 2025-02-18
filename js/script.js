function openLightbox() {
    document.querySelector('.lightbox').classList.add('active');
}

function closeLightbox() {
    document.querySelector('.lightbox').classList.remove('active');
}

function openLightbox(imgSrc) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('#lightbox-img');
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.querySelector('.lightbox').classList.remove('active');
}