/* --------------------------
    Notification Text Animation
 --------------------------*/

var textTimeline = gsap.timeline();

gsap.set("#text", {alpha:0, yPercent: 100});

textTimeline.to(".logos", {duration:0.5, alpha:1, yPercent: 0, stagger:0.25});

ScrollTrigger.create({
     animation: textTimeline,
     toggleActions: "restart none none none",
     trigger: "#myModal",
     start: "top 60%",
     end: "bottom 60%",
    markers: true,
    id: "logos"
    // scrub: 1
 });