document.querySelectorAll('.zoom').forEach(item => {
    item.addEventListener('hover', function () {
        this.classList.toggle('image-zoom-large');
    })
});