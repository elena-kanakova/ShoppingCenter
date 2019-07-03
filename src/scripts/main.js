//Табы
$(function(){
    $('.section-2__tab-nav .js-tab-nav:first').addClass('active');
    $('.section-2__tab-content:first').addClass('active');
    $(".section-2__tab-nav").on("click", ".js-tab-nav", function(e){
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

$(function(){
    $('.car-wrap .js-tab:first, .bus-wrap .js-tab:first').addClass('active');
    $('.car-wrap .tabs-cont:first, .bus-wrap .tabs-cont:first').addClass('active');
    $(".car-wrap .nav-tabs").on("click", ".js-tab", function(e){
        var tabs = $(".car-wrap .js-tab"),
            cont = $(".car-wrap .tabs-cont");

        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");

        return false;
    });
    $(".bus-wrap .nav-tabs").on("click", ".js-tab", function(e){
        var tabs = $(".bus-wrap .js-tab"),
            cont = $(".bus-wrap .tabs-cont");

        // Удаляем классы active
        tabs.removeClass("active");
        cont.removeClass("active");
        // Добавляем классы active
        $(this).addClass("active");
        cont.eq($(this).index()).addClass("active");

        return false;
    });
});

$(function(){
    $('.section-4__tab-nav_wrap .js-tab:first').addClass('active');
    $('.section-4__tab-content_wrap .js-tab-cont:first').addClass('active');
    $(".section-4__tab-nav_wrap").on("click", ".js-tab", function(e){
        var tabs = $(".section-4__tab-nav_wrap .js-tab"),
            cont = $(".section-4__tab-content_wrap .js-tab-cont");

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

$('.header_btn-search').on('click', function (e) {
    $('.header_search-wrap').toggleClass('active');
});

$('.footer__up').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, {
        duration: 1000
    });
    return false;
});

window.onload = function () {
var myMap = new YMaps.Map(document.getElementById("YMapsID"));
function init () {
    var multiRoute = new ymaps.multiRouter.MultiRoute({
        referencePoints: [
            [55.84972814947887,37.4409078376427],
            [55.850384, 37.442904]
        ],
        params: {
            routingMode: "pedestrian"
        }
    }, {
        boundsAutoApply: false
    });

    if($(window).width()>=780) {
        myMap = new ymaps.Map('YMapsID', {
            center: [55.85015866968317, 37.44118975656129],
            zoom: 16,
            controls: []
        }, {
            buttonMaxWidth: 300
        });
    } else {
        myMap = new ymaps.Map('YMapsID', {
            center: [55.847731, 37.443916],
            zoom: 16,
            controls: []
        }, {
            buttonMaxWidth: 300
        });
    };

    myPlacemark = new ymaps.Placemark( [55.85046590880292,37.44338944344711], {
        hintContent: '',
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/heap_parking.svg',
        iconImageSize: [130, 130],
        iconImageOffset: [-65, -35]
    })
    myPlacemark2 = new ymaps.Placemark( [55.850761645843335,37.44492366700363], {
        hintContent: '',
    }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/k.svg',
        iconImageSize: [130, 130],
        iconImageOffset: [-45, -45]
    })

    ZoomLayout = ymaps.templateLayoutFactory.createClass("<div class='map-controls'><span class='crow'></span><div id='zoom-in' class='btn'><span class='icon-plus'>+</span></div><div id='zoom-out' class='btn'><span class='icon-minus'>-</span></div></div>", {
        build: function() {
            ZoomLayout.superclass.build.call(this), this.zoomInCallback = ymaps.util.bind(this.zoomIn, this), this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this), $("#zoom-in").bind("click", this.zoomInCallback), $("#zoom-out").bind("click", this.zoomOutCallback)
        },
        clear: function() {
            $("#zoom-in").unbind("click", this.zoomInCallback), $("#zoom-out").unbind("click", this.zoomOutCallback), ZoomLayout.superclass.clear.call(this)
        },
        zoomIn: function() {
            var e = this.getData().control.getMap();
            e.setZoom(e.getZoom() + 1, {
                checkZoomRange: !0
            })
        },
        zoomOut: function() {
            var e = this.getData().control.getMap();
            e.setZoom(e.getZoom() - 1, {
                checkZoomRange: !0
            })
        }
    }), zoomControl = new ymaps.control.ZoomControl({
        options: {
            layout: ZoomLayout
        }
    }), myMap.controls.add(zoomControl, {
        float: "none",
        position: {
            top: 100,
            right: 10
        }
    });
    myMap.behaviors.disable("scrollZoom"),myMap.geoObjects.add(multiRoute),myMap.geoObjects.add(myPlacemark),myMap.geoObjects.add(myPlacemark2);
}
};

$('.mouse').on('click',function (e) {
    $("html, body").animate({
        scrollTop: $('#index__section-2').offset().top
    }, {
        duration: 800
    });
});