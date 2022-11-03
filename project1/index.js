$('.head').mousemove(e => {
    e.target.style.setProperty('--xpos', `${e.pageX}px`);
    e.target.style.setProperty('--ypos', `${e.pageY}px`);
    $('.glow').css('left', `${e.pageX}px`);
    $('.glow').css('top', `${e.pageY}px`);
})

