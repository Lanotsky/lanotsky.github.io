var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    duration: 900
};

$(function(){
    ScrollReveal().reveal($('.reveal'), slideUp); 
});