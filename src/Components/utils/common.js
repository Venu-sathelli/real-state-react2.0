export const slideSettings={
    slidesPerView:1,
    spaceBetween:40,
    type: "progressbar",
    el: ".swiper-pagination",
    breakpoints:{
        480:{
            slidesPerView:1
        },
        600:{
            slidesPerView:2
        },
        750:{
            slidesPerView:3
        },
        1100:{
            slidesPerView:4
        }
    },
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    
}