// ================================ innerheader_hide ================================

var new_arrival_swiper = new Swiper(".new_arrival_swiper", {
    loop:true,
    slidesPerView: 1.7,
    centerSlides:true,
    spaceBetween: 30,
    breakpoints:{
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
        1440:{
            slidesPerView:4
        },
    }
});
var top_selling_slider = new Swiper(".top_selling_slider", {
    loop:true,  
    slidesPerView: 1.7,
    centerSlides:true,
    spaceBetween: 30,
    breakpoints:{
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
        1440:{
            slidesPerView:4
        },
    }
});

var customer_review_slider = new Swiper(".customer_review_slider",{
    loop:true,
    slidesPerView:1,
    spaceBetween: 30,
    centerSlides:true,
    breakpoints:{
        768:{
            slidesPerView:2
        },
        1024:{
            slidesPerView:3
        },
        1280:{
            slidesPerView:4
        },
        1440:{
            slidesPerView:5
        }
    },
    navigation: {
        nextEl: ".tesimonial_right_arrow",
        prevEl: ".tesimonial_left_arrow",
      },
})

jQuery(document).ready(function ($) { 
    // Handle scroll event for sticky header
    if ($(window).scrollTop() >= 70) {
        $('.header').addClass('is-sticky');
        $('.innerheader').addClass('hidden');
    }
    $(window).scroll(function () { 
        if ($(window).scrollTop() >= 70) {
            $('.header').addClass('is-sticky');
            $('.innerheader').addClass('hidden');
        } else {
            $('.header').removeClass('is-sticky');
            $('.innerheader').removeClass('hidden');
        }
    });

    // Adjust container class based on window width
    function adjustContainerClass() {
        const $swiperContent = $(".tesimonial_swiper_content");
        if ($(window).width() <= 1024) {
            $swiperContent.addClass("container-fluid");
        } else {
            $swiperContent.removeClass("container-fluid");
        }
    }

    // Run on page load
    adjustContainerClass();

    // Run on window resize
    $(window).on("resize", adjustContainerClass);
});




let hide_inner_div_btn = document.querySelector('.hide_inner_div')
let innerheader = document.querySelector('.innerheader')

hide_inner_div_btn.addEventListener("click",function(){
    gsap.to(innerheader,{
        display:'none',
        opacity:0,
        duration:0.4
    })
})

