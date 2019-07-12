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

$(function(){
    $('.news-list__section .news-tabs .js-tab:first').addClass('active');
    $('.news-list__section .news-content_wrap .js-tab-cont:first').addClass('active');
    $(".news-list__section").on("click", ".js-tab", function(e){
        var tabs = $(".news-list__section .news-tabs .js-tab"),
            cont = $(".news-list__section .news-content_wrap .js-tab-cont");

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
    $('.movies-list__section .cinema-tabs .js-tab:first').addClass('active');
    $('.movies-list__section .cinema-content_wrap .js-tab-cont:first').addClass('active');
    $(".movies-list__section").on("click", ".js-tab", function(e){
        var tabs = $(".movies-list__section .cinema-tabs .js-tab"),
            cont = $(".movies-list__section .cinema-content_wrap .js-tab-cont");

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

jQuery(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $('.header_search-wrap'); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
        }
    });
});

$('.footer__up').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, {
        duration: 1000
    });
    return false;
});

$('.mouse').on('click',function (e) {
    $("html, body").animate({
        scrollTop: $('#index__section-2').offset().top
    }, {
        duration: 800
    });
});

var inputs = document.getElementsByClassName('input-text');
[].forEach.call(inputs, function(elem){
    elem.onfocus = function(){
        elem.previousElementSibling.classList.add('hidden');
        // elem.parentElement.querySelector('LABEL').classList.add('hidden');
        // elem.parentElement.querySelector('[for="'+ elem.id+'"]').classList.add('hidden');
    }
    elem.onblur = function(){
        elem.previousElementSibling.classList.remove('hidden');
        // elem.parentElement.querySelector('LABEL').classList.remove('hidden');
        // elem.parentElement.querySelector('[for="'+ elem.id+'"]').classList.remove('hidden');
    }
});

// Маска для телефона
$(function(){
    $(".js-phone").mask("+7 999 999 99 99");
});

$('.js-menu-btn').on('click', function (e) {
    $(this).toggleClass('active');
    $('html').toggleClass('fixed');
    $('#header-menu_open').toggleClass('active');
});

$('.js-btn-rent').on('click', function (e) {
    //$('html').addClass('fixed');
    $('#index__section-6').addClass('perspective freeze').addClass('active');
});

$('.js-btn-rent_back').on('click', function (e) {
    //$('html').removeClass('fixed');
    $('#index__section-6').removeClass('active').removeClass('perspective freeze');
});

// Для инпутов при изменении в форме аренды
$('document').ready(function(){
    $("#rent-modal .input-wrap input").change(function() {
        if ($(this).val().trim().length) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active');
        }
    });
});