gsap.registerPlugin(ScrollTrigger);

//Notification Text Animation
const textTimeline = gsap.timeline();

gsap.set("#text", {alpha:0, yPercent: 100});

textTimeline.to("#text", {duration:0.5, alpha:1, yPercent: 0, stagger:0.25});

ScrollTrigger.create({
     animation: textTimeline,
     toggleActions: "restart none none none",
     trigger: "#myModal",
     start: "top 20%",
     end: "bottom 20%",
    markers: true,
    id: "notification-text"
    // scrub: 1
 });