gsap.registerPlugin(ScrollToPlugin);

// animating three buttons to scrollto respective index sections
var scrollItems =["#section-1", "#section-2", "#section-3"];

function scrollIndex(){
    // gsap.to(window, {duration: 2, scrollTo:"#index-card1"});
    gsap.to(window, {duration: 1, scrollTo: {y: scrollItems[$('header #menu ul li').index(this)], offsetY: 100}});
}