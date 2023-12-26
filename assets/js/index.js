/** Banner */

$(document).ready(function() {
    let $sliderBanner = $('.slider-banner');
    var timer;
    var slideDuration = 5000;

    setTimeout(() => {
        $('#first_content_slide').removeAttr('id');
    }, 10);


    $sliderBanner.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        clearInterval(timer);
        startTimer();
    });

    $sliderBanner.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: false,
        variableWidth: false,
        infinite: true,
        useTransform: true,
        speed: 500,
        autoplaySpeed: slideDuration,
        autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    startTimer();

    function startTimer() {
        var progressBar = $('.slider__progress');
        var slideStartTime = Date.now();

        timer = setInterval(function() {
            var currentTime = Date.now();
            var elapsedTime = currentTime - slideStartTime;
            var progress = (elapsedTime / slideDuration) * 100;

            if (progress > 100) {
                clearInterval(timer);
                progressBar.css('width', '100%');
            } else {
                progressBar.css('width', progress + '%');
            }
        }, 10);
    }
});


/** Animations in body */

//animate text and title section-type-fixed
$(window).on('scroll', function() {
    var elements = $('.animate_enter');
    elements.each(function() {
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top && !$(this).hasClass('animate__animated')) {
            $(this).addClass('animate__animated animate__fadeIn animate__slideInUp');
        }
    });
});

// animate parter logos
$(window).on('scroll', function() {
    var elements = $('.clients__refs');
    elements.each(function() {
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top && !$(this).hasClass('animate__animated')) {
            $(this).addClass('animating');
        }
    });
});

// animate parter logos
$(window).on('scroll', function() {
    var elements = $('.domains');
    elements.each(function() {
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top && !$(this).hasClass('animate__animated')) {
            $(this).addClass('animating');
        }
    });
});

/*** Global nav of current page */

$('.section-default').each(function() {
    var sectionNumber = $(this).data('section-number');
});

$('.site__sidebar .site__sidebar__item').click(function() {
    var goto = $(this).data('goto');
    if (goto >= $('.scrollable-section').length) {
        scrollBottom();
    } else {
        scrollTo($(`.scrollable-section:nth-of-type(${goto+2})`));
    }
});

function scrollTo(element) {
    var offset = element.offset().top;
    $('html, body').animate({
        scrollTop: offset
    }, 'slow');
}


function scrollBottom() {
    $('html, body').animate({
        scrollTop: $(document).height()
    }, 'slow');
}

$(window).scroll(function() {
    const currentScrollHeight = $(this).scrollTop();
    let currentIndexSection = 0;

    if (Math.round($(window).scrollTop() + $(window).height()) >= $(document).height()) {
        currentIndexSection = $('.scrollable-section').length;
    } else {
        $('.scrollable-section').each(function(index) {
            var sectionNumber = $(this).data('section-number');
            elementClientHeihgt = $(`.scrollable-section:nth-of-type(${sectionNumber+1})`).offset().top;
            if (elementClientHeihgt < currentScrollHeight + 1) {
                currentIndexSection = index
            }

        });
    }

    activeNavGlobalButton(currentIndexSection + 1);
});

function activeNavGlobalButton(index) {
    $('.site__sidebar__item').each(function() {
        $(this).removeClass('site__sidebar__item--active');
    });
    $(`.site__sidebar .site__sidebar__item:nth-child(${index})`).addClass("site__sidebar__item--active");
}