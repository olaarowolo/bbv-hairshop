// Initialize the carousel
document.addEventListener('DOMContentLoaded', function () {
    var myCarousel = document.querySelector('.carousel');
    var carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,  // Cycle every 5 seconds
        wrap: true,      // Loop the carousel
        slide: true      // Enable sliding transition
    });
});
