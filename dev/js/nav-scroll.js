gsap.registerPlugin(ScrollToPlugin);

var scrollItems =["#section-1", "#section-2", "#section-3", "#map-section"];

function scrollIndex(){
    gsap.to(window, {duration: 1, scrollTo: {y: scrollItems[$('header #menu ul li button').index(this)], offsetY: 100}});
}