const allPhotos = document.querySelectorAll('.photo-cont *'); 
const modal = document.getElementById('photoModal');
const modalImage = document.getElementById('modalImage');
const modalVideo = document.getElementById('modalVideo');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

allPhotos.forEach((element, index) => {
    element.addEventListener('click', () => {
        modal.style.display = 'block';
        currentIndex = index;

        if (element.tagName === 'IMG') {
            modalImage.style.display = 'block';
            modalVideo.style.display = 'none';
            modalImage.src = element.src;
        } else if (element.tagName === 'VIDEO') {
            modalVideo.style.display = 'block';
            modalImage.style.display = 'none';
            modalVideo.src = element.src;
        }
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.pause(); 
});

nextBtn.addEventListener('click', showNextMedia);
prevBtn.addEventListener('click', showPrevMedia);

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalVideo.pause(); 
    }
});

window.addEventListener('keydown', (event) => {
    if (modal.style.display === 'block') {
        switch (event.key) {
            case 'ArrowRight':
            case 'd':
                showNextMedia();
                break;
            case 'ArrowLeft':
            case 'a':
                showPrevMedia();
                break;
            case 'x':
            case 'Escape':
                modal.style.display = 'none';
                modalVideo.pause(); 
                break;
        }
    }
});

function showNextMedia() {
    currentIndex = (currentIndex + 1) % allPhotos.length;
    displayMedia(allPhotos[currentIndex]);
}

function showPrevMedia() {
    currentIndex = (currentIndex - 1 + allPhotos.length) % allPhotos.length;
    displayMedia(allPhotos[currentIndex]);
}

function displayMedia(element) {
    if (element.tagName === 'IMG') {
        modalImage.style.display = 'block';
        modalVideo.style.display = 'none';
        modalImage.src = element.src;
    } else if (element.tagName === 'VIDEO') {
        modalVideo.style.display = 'block';
        modalImage.style.display = 'none';
        modalVideo.src = element.src;
    }
}


