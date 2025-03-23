const thumbnails = document.querySelectorAll('.thumb');
const gallery = document.getElementById('gallery');
const galleryImage = document.getElementById('gallery-image');
const close = document.querySelector('.close');
const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");

let currentIndex = 0;

thumbnails.forEach((thumb, index) =>{
    function openGallery(selectedThumb, selectedIndex){
        gallery.style.display = 'flex';
        galleryImage.src = selectedThumb.getAttribute('data-full');
        currentIndex = selectedIndex;
    }
    thumb.addEventListener('click', function(){
        openGallery(thumb, index);
    });
    thumb.addEventListener('keydown', event =>{
        if ( event.key === "Enter"){
            openGallery(thumb, index);
        }
    });
});


close.addEventListener('click', function(){
    gallery.style.display = 'none';
});

document.addEventListener('keydown', (event)=>{
    if(event.key === 'Escape'){
        gallery.style.display = 'none';
    } else if(event.key === 'ArrowLeft'){
        if (currentIndex > 0) {
            currentIndex--;
            galleryImage.src = thumbnails[currentIndex].getAttribute('data-full');
        }
    } else if(event.key === 'ArrowRight'){
        if (currentIndex < thumbnails.length - 1) {
            currentIndex++;
            galleryImage.src = thumbnails[currentIndex].getAttribute('data-full');
        }
    }
});

leftArrow.addEventListener('click', function(){
    if (currentIndex > 0) {
        currentIndex--;
        galleryImage.src = thumbnails[currentIndex].getAttribute('data-full');
    }
});

rightArrow.addEventListener('click', function(){
    if (currentIndex < thumbnails.length - 1) {
        currentIndex++;
        galleryImage.src = thumbnails[currentIndex].getAttribute('data-full');
    }
});
