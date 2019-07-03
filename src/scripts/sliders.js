//Слайдеры
var section_1_slider = new Swiper('.section-1__slider-wrap', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    setWrapperSize: true,
    fadeEffect: {
        crossFade: true
    },
    pagination: {
        el: '.section-1__slider_nav-wrap .pagination-wrap',
        clickable: true,
        bulletClass: 'dots',
        bulletActiveClass: 'active',
        renderBullet: function (index, className) {
            return '<div class="dots flex ' + className + '"><span class="dot"></span><span class="number">0 ' + (index + 1) + '</span></div>';
        },
    }
});

var section_2_slider = new Swiper('.section-2__slider-wrap', {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
    setWrapperSize: true,
    observer: true,
    observeParents: true,
    navigation: {
        nextEl: '.section-2__slider-nav .next',
        prevEl: '.section-2__slider-nav .prev',
    },
    breakpoints: {
        414: {
            spaceBetween: 0,
            centeredSlides: true,
            slidesPerView: 1
        },
        820: {
            spaceBetween: 0,
            centeredSlides: true,
            slidesPerView: 1
        },
        1100: {
            spaceBetween: 5,
            centeredSlides: true,
            slidesPerView: 2
        },
        1230: {
            spaceBetween: 5,
            centeredSlides: false,
            slidesPerView: 2
        },
        1280: {
            spaceBetween: 20,
            centeredSlides: false,
            slidesPerView: 2
        }
    }
});

var section_3_slider = new Swiper('.section-3__slider-wrap', {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    setWrapperSize: true,
    navigation: {
        nextEl: '.section-3__slider-nav .next',
        prevEl: '.section-3__slider-nav .prev',
    },
    breakpoints: {
        414: {
            centeredSlides: false,
            slidesPerView: 2
        },
        740: {
            centeredSlides: true,
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1280: {
            slidesPerView: 4
        }
    }
});

var section_5_slider = new Swiper('.section-5__slider-cafe_wrap', {
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    setWrapperSize: true,
    navigation: {
        nextEl: '.section-5__slider-nav .next',
        prevEl: '.section-5__slider-nav .prev',
    },
    breakpoints: {
        414: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1465: {
            slidesPerView: 4
        }
    }
});

var section_5_slider_2 = new Swiper('.section-5__slider-banner_wrap', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    setWrapperSize: true,
    pagination: {
        el: '.section-5__slider-banner_wrap .slider-dots',
        clickable: true,
        bulletClass: 'dot',
        bulletActiveClass: 'active'
    }
});

var section_10_slider = new Swiper('.section-10__slider-wrap', {
    slidesPerView: 4,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    navigation: {
        nextEl: '.section-10__slider-nav .next',
        prevEl: '.section-10__slider-nav .prev',
    },
    pagination: {
        el: '.section-10__slider-nav .numbers',
        type: 'fraction',
        currentClass: 'active',
        totalClass: 'slide-number',
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                '<span> / </span>' +
                '<span class="' + totalClass + '"></span>';
        }
    }
});