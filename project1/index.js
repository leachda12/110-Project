$('.head').mousemove(e => {
    e.target.style.setProperty('--xpos', `${e.pageX}px`);
    e.target.style.setProperty('--ypos', `${e.pageY}px`);
    $('.glow').css('left', `${e.pageX}px`);
    $('.glow').css('top', `${e.pageY}px`);
});

$('.fake-power').hover(e => {
    $('.fake-power img').fadeIn(500);
}, e => {
    $('.fake-power img').fadeOut(500);
});

// class="animate_animated animate__zoomOut"
// for the button on click

$('.fake-power').click(e => {
    $('.light-box').addClass('let-there-be-light');
    $('.guise').fadeOut(1000);
    $('.head').fadeOut(2000);
    $('.power').fadeOut(1000);
    $('.fake-power').fadeOut(1000);
})



