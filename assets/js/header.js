/** active sticky header **/
$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
        $("header[role='banner']").addClass('sticky');
    } else {
        $("header[role='banner']").removeClass('sticky');
    }
});


/*** sidebar ***/


/* for open and close the sidebar */
$('.menu__item').on('click', function() {
    $('.site__body__overlay').addClass('active');
    $('.side_bar').addClass('active');
    $('.overflow-hidden').addClass('overflow-active');
});
$('.mobile-toggle-menu').on('click', function() {
    $('.site__body__overlay').addClass('active');
    $('.side_bar').addClass('active');
    $('.overflow-hidden').addClass('overflow-active');

    /** tabs */
    $('.side_bar>.tab_item').each(function() {
        $(this).removeClass('show');
    });
    $(`.side_bar>.tab_item:nth-child(1)`).addClass("show");
    $(`.menu__item:nth-child(1)`).addClass("menu__item--active");
});


/*** Close sidebar */
$('.site__body__overlay,.bloc-menu .mobile-close-menu').on('click', function() {
    /** overlay */
    $('.site__body__overlay').removeClass('active');

    /** Side bar */
    $('.side_bar').removeClass('active');

    /** overflow */
    $('.overflow-hidden').removeClass('overflow-active');

    /** tabs */
    $('.menu__item').removeClass('menu__item--active');
    $('.side_bar>.tab_item').each(function() {
        $(this).removeClass('show');
    });
});


/** open close tabs **/


$('.menu__item').on('click', function() {
    var dataTabValue = $(this).data('tab');

    /** tabs */
    $('.side_bar>.tab_item').each(function() {
        $(this).removeClass('show');
    });
    $('.menu__item').removeClass('menu__item--active');
    $(this).addClass('menu__item--active');
    $(`.side_bar>.tab_item:nth-child(${dataTabValue})`).addClass("show");
});



/** contact forms tabs **/

$('.contact_choices__item').on('click', function() {
    var dataTabValue = $(this).data('goto');
    console.log(dataTabValue);

    /** tabs */
    $('.side_bar .contact__forms__item').each(function() {
        $(this).removeClass('show');
    });
    $('.contact_choices__item').each(function() {
        $(this).removeClass('active');
    });
    $(this).addClass('active');
    $(`.side_bar .contact__forms__item:nth-child(${dataTabValue})`).addClass("show");
});