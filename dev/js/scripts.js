
// @codekit-prepend "nav-scroll.js";
// @codekit-prepend "main-nav-click.js";

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

gsap.set(modal,{alpha:0,scale:0.33, display:"none"});

// When the user clicks on the button, open the modal
btn.onclick = function() {

  console.log("show modal!");
  //modal.style.display = "block";
  // modal.style.display = "textTimeline";
 gsap.to(modal,{duration:.5, alpha:1 ,scale:1, display:"block"})

 gsap.from("#text h2", {duration:1.5, alpha:0, yPercent: -50}, "title")
 gsap.from("#text p", {duration:1.5, alpha:0, yPercent: -50, stagger:0.25}, "body")
 gsap.from("#text button", {duration:1.5, alpha:0, yPercent: 100}, "button");
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  //modal.style.display = "none";
  gsap.to(modal,{duration:.5, alpha:0, scale:0.33,display:"none"});

  
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    //modal.style.display = "none";
    gsap.to(modal,{duration:.5, alpha:0, scale:0.33,display:"none"});
  }
}