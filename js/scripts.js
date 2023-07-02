$(document).ready(function () {

    $('.btn-menu').on('click', function () {
        $(this).toggleClass('active');
        $('header nav, body').toggleClass('active');
    })


    /*---------------------------------------------------end*/


    $('.offers .wrap').slick({
        dots: true,
        arrows: false,
        mobileFirst: true,
        infinite: false,
        speed: 300,
        centerPadding: '20px',
        swipeToSlide: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 700,
                settings: "unslick",
            },
        ]
    });
    $('.yields .wrap').slick({
        dots: true,
        arrows: false,
        mobileFirst: true,
        infinite: false,
        speed: 300,
        centerPadding: '10px',
        swipeToSlide: true,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: "unslick",
            },
        ]
    });


});

