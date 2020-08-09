
// @codekit-prepend "nav-scroll.js";
// @codekit-prepend "main-nav-click.js";


function notification() {
    var txt;
    if (confirm("Allow access to your location:")) {
      txt = "Location access granted";
    } else {
      txt = "Location access denied";
    }
    document.getElementById("response").innerHTML = txt;
  }