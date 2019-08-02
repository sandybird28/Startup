'use strict';

$('.about-us-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,    
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
        breakpoint: 1000,
        settings: {
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1
        }},
        {
        breakpoint: 750,
        settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
        }}
        
    ]

  });

$('.clients-logos-bar').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    arrows: false,
    responsive: [
        {
        breakpoint: 1100,
        settings: {
            arrows: false,
            slidesToShow: 3
        }
        },
        {
        breakpoint: 480,
        settings: {
            arrows: false,
            slidesToShow: 2
        }
        }
    ]
    });


$('.clients-description').slick({
    dots: true,
    arrows: false,
});    