var swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

$("#scrollLink").click(function(event) {
        event.preventDefault();  // Prevent the default link behavior
        $("html, body").animate({
            scrollTop: "+=500px"  // Scroll down by 500px
        }, 500);  // Duration of the scroll animation (in ms)
    });

