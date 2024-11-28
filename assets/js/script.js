// ============================================================ NEW ARRIVAL SLIDER ============================================================  

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

// ============================================================ TOP SELLING SLIDER ============================================================  

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

// ============================================================ CUSTOMER REVIEW SLIDER ============================================================  


// var customer_review_slider = new Swiper(".customer_review_slider",{
//     loop:true,
//     slidesPerView:1,
//     spaceBetween: 30,
//     centerSlides:true,
//     breakpoints:{
//         640:{
//             slidesPerView:1
//         },
//         768:{
//             slidesPerView:2,
//         },
//         1024:{
//             slidesPerView:3,
//         },
//         1280:{
//             slidesPerView:4,
//         },
//         1440:{
//             slidesPerView:5,
//         }
//     },
//     navigation: {
//         nextEl: ".tesimonial_right_arrow",
//         prevEl: ".tesimonial_left_arrow",
//       },
// })

var customer_review_slider = new Swiper(".customer_review_slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
        1440: {
            slidesPerView: 5,
        }
    },
    navigation: {
        nextEl: ".tesimonial_right_arrow",
        prevEl: ".tesimonial_left_arrow",
    },
    on: {
        slideChange: function () {
            document.querySelectorAll(".swiper-slide").forEach(slide => slide.classList.remove("blur"));

            const activeIndex = this.activeIndex;
            const slides = this.slides;
            const visibleSlidesCount = this.params.slidesPerView;

            const firstVisibleIndex = activeIndex - Math.floor(visibleSlidesCount / 2);
            const lastVisibleIndex = activeIndex + Math.floor(visibleSlidesCount / 2);

            if (slides[firstVisibleIndex]) {
                slides[firstVisibleIndex].classList.add("blur");
            }
            if (slides[lastVisibleIndex]) {
                slides[lastVisibleIndex].classList.add("blur");
            }
        }
    }
});


// ============================================================ BRAND SLIDER ============================================================  

var swiperOptions = {
    loop: true,
    freeMode: true,
    cssMode: false,
    spaceBetween: 30,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    slidesPerView: 5, 
    speed: 3000,
    grabCursor: true,
    loopAdditionalSlides: 5,
  };
  
  var swiper = new Swiper(".brand_swiper_slider", swiperOptions);
  

// ============================================================ STICKY HEADER ============================================================  
  

jQuery(document).ready(function ($) { 
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
    function adjustContainerClass() {
        const $swiperContent = $(".tesimonial_swiper_content");
        if ($(window).width() <= 1024) {
            $swiperContent.addClass("container-fluid");
        } else {
            $swiperContent.removeClass("container-fluid");
        }
    }
    adjustContainerClass();
    $(window).on("resize", adjustContainerClass);
});

// ============================================================ INNER HEADER ============================================================  

let hide_inner_div_btn = document.querySelector('.hide_inner_div')
let innerheader = document.querySelector('.innerheader')

hide_inner_div_btn.addEventListener("click",function(){
    gsap.to(innerheader,{
        display:'none',
        opacity:0,
        duration:0.4
    })
})


// ============================================================ SIDEBAR ============================================================  

let close_btn = document.querySelector(".close_btn")
let sidebar = document.querySelector(".sidebar")
let sidebarLinks = document.querySelectorAll(".sidebar .nav-link")
let hamburger_menu = document.querySelector(".hamburger_menu")


let sidebar_timeline = gsap.timeline()

sidebar_timeline.to(sidebar, {
    left: 0,
    duration: 0.3,
});
sidebar_timeline.from(sidebarLinks,{
    x:-150,
    duration:0.4,
    opacity:0,
    stagger:0.1
})
sidebar_timeline.pause()

hamburger_menu.addEventListener("click",function(){
    sidebar_timeline.play()
})
close_btn.addEventListener("click",function(){
    sidebar_timeline.reverse()
})

// ============================================================ SIDEBAR DROPDOWN ============================================================  

function toggleDropdown(event) {
    const button = event.currentTarget;
    const dropdownMenu = button.nextElementSibling;
    dropdownMenu.classList.toggle('hidden');
    const icon = button.querySelector('svg');
    icon.classList.toggle('rotate-180');
}

// ============================================================ SPARKLE ANIMATION ============================================================  




gsap.to(".sparkle_one,.sparkle_two",{
    scale:0.8,
    duration:0.8,
    yoyo:true,
    repeat:-1
})