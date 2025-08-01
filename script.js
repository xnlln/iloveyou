document.addEventListener('DOMContentLoaded', () => {
    const photos = [
        { src: '1.jpg', caption: 'My beach babe.' },
        { src: '2.jpg', caption: 'My cute little bunny.' },
        { src: '3.jpg', caption: 'Every curve is perfect.' },
        { src: '4.jpg', caption: 'Just too cute.' },
        { src: '5.jpg', caption: 'My stunning hot girl.' },
        { src: '6.jpg', caption: 'That perfect smile.' },
        { src: '7.jpg', caption: 'Lost in your own world.' },
        { src: '8.jpg', caption: 'Cuteness overload.' },
        { src: '9.jpg', caption: 'Simply so pretty.' }
    ];

    const gallery = document.querySelector('.photo-gallery');

    function createGallery() {
        photos.forEach(photo => {
            const photoItem = document.createElement('div');
            photoItem.classList.add('photo-item');
            
            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.caption;

            const caption = document.createElement('p');
            caption.classList.add('photo-caption');
            caption.textContent = photo.caption;

            photoItem.appendChild(img);
            photoItem.appendChild(caption);
            gallery.appendChild(photoItem);
        });
    }

    createGallery();

    const fallingItemsContainer = document.querySelector('.falling-items-bg');
    
    function createFallingItem() {
        const item = document.createElement('div');
        item.classList.add('falling-item');
        item.style.left = `${Math.random() * 100}vw`;
        item.style.animationDuration = `${Math.random() * 5 + 5}s`;
        fallingItemsContainer.appendChild(item);
        
        item.addEventListener('animationend', () => {
            item.remove();
        });
    }

    setInterval(createFallingItem, 10000);
});