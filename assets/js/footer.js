$(document).ready(function() {
    $('.site__footer__back').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});

$(window).scroll(function() {
    if ($(this).scrollTop() < 50) {
        $('.site__footer__back').hide();
    } else {
        $('.site__footer__back').show();
    }
});