document.addEventListener('DOMContentLoaded', function() {
const images = [
    { src: '../images/1.jpeg', alt: 'Изображение 1' },
    { src: '../images/2.avif', alt: 'Изображение 2' },
    { src: '../images/3.jpeg', alt: 'Изображение 3' },
    { src: '../images/4.jpg', alt: 'Изображение 4' },
];

const mainImage = document.getElementById('mainImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const imageCounter = document.getElementById('imageCounter');
const thumbnailContainer = document.getElementById('thumbnailContainer');

let currentIndex = 0;

function initGallery() {
    updateMainImage();
    
    images.forEach((image, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.src = image.src;
        thumbnail.alt = image.alt;
        thumbnail.className = 'thumbnail';
        if (index === currentIndex) {
            thumbnail.classList.add('active');
        }
        
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateMainImage();
            updateThumbnails();
        });
        
        thumbnailContainer.appendChild(thumbnail);
    });
    
    updateButtons();
}

function updateMainImage() {
    mainImage.src = images[currentIndex].src;
    mainImage.alt = images[currentIndex].alt;
    imageCounter.textContent = `${currentIndex + 1} / ${images.length}`;
}

function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
    });
}

function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex === images.length - 1;
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateMainImage();
        updateThumbnails();
        updateButtons();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateMainImage();
        updateThumbnails();
        updateButtons();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevBtn.click();
    } else if (e.key === 'ArrowRight') {
        nextBtn.click();
    }
});

initGallery();
});