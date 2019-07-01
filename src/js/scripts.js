//Табы
$(function(){
    $('.section-2__tab-nav .js-tab-nav:first').addClass('active');
    $('.section-2__tab-content:first').addClass('active');
    $(".section-2__tab-nav").on("click", ".js-tab-nav", function(){
        var tabs = $(".section-2__tab-nav .js-tab-nav"),
            cont = $(".section-2__tab-content");

        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");

        return false;
    });
});

$('.filter-form select').each(function() {
    var $this = $(this)
        , numberOfOptions = $(this).children('option').length;
    $this.addClass('select_hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select_styled"></div>');
    
    var $styledSelect = $this.next('div.select_styled');
    
    $styledSelect.text($this.children('option').eq(0).text());
    
    var $list = $('<ul />', {
        'class': 'select_options'
    }).insertAfter($styledSelect);
    
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
    
    var $listItems = $list.children('li');
    
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select_styled.active').not(this).each(function() {
            $(this).removeClass('active').next('ul.select_options').hide();
        });
        $(this).toggleClass('active').next('ul.select_options').toggle();
    });
    
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        $("input[type='submit'].filterApply").trigger('click');
    });
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
});

$('.filter__list-type > label').on('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var labFor = $(this).attr('for');
    var $input = $('#' + labFor);
    if ($input.length !== 0) {
        if ($input.is(':checked')) {
            return;
        } else {
            $('.filter__list-type > input').prop('checked', false);
            $input.prop('checked', true);
            $("input[type='submit'].filterApply").trigger('click');
        }
    }
});

$('.js-block').on('click', function (e) {
    $('.block-type').addClass('active');
    $('.list-type').removeClass('active');
});

$('.js-list').on('click', function (e) {
    $('.list-type').addClass('active');
    $('.block-type').removeClass('active');
});

$('.js-open-filter').on('click', function (e) {
    $('#filter-open_modal').fadeIn(300);
});

$('.js-btn-close').on('click', function (e) {
    $('#filter-open_modal').fadeOut(300);
});
//Some popup code
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
        768: {
            spaceBetween: 0,
            centeredSlides: true,
            slidesPerView: 1
        },
        1280: {
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
    loop: false,
    setWrapperSize: false,
    centeredSlides: false,
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
    },
    breakpoints: {
        414: {
            centeredSlides: true,
            slidesPerView: 1
        },
        768: {
            centeredSlides: true,
            slidesPerView: 1
        }
    }
});