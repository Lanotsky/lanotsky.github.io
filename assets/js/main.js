var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    duration: 900
};

function addClassOnHover(element, className, targetElement = false) {
    if(targetElement){
        element.hover(function () {
            targetElement.addClass(className);
        },
        function () {
            targetElement.removeClass(className);
        });
    } else {
        element.hover(function () {
            element.addClass(className);
        },
        function () {
            element.removeClass(className);
        });
    }

}

$(function(){
    ScrollReveal().reveal($('.reveal'), slideUp); 
    addClassOnHover($('.one'),'show',$('.1-desc'));
    addClassOnHover($('.two'),'show',$('.2-desc'));
    addClassOnHover($('.three'),'show',$('.3-desc'));
});