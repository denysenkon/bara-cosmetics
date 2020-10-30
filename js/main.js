// sensor

(function () {
  var d = document,
    w = window;
  w.MgSensorData = w.MgSensorData || [];
  w.MgSensorData.push({
    cid: 447000,
    lng: "us",
    nosafari: true,
    project: "a.mgid.com",
  });
  var l = "a.mgid.com";
  var n = d.getElementsByTagName("script")[0];
  var s = d.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  var dt = !Date.now ? new Date().valueOf() : Date.now();
  s.src = "https://" + l + "/mgsensor.js?d=" + dt;
  n.parentNode.insertBefore(s, n);
})();



// termini pop-up

var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});



// Disclaimer pop-up

var modalDisclaimer = document.getElementById("myModalDisclaimer");
// Get the button that opens the modal
var btnDisclaimer = document.getElementById("myBtnDisclaimer");
// When the user clicks on the button, open the modal 
btnDisclaimer.onclick = function() {
  modalDisclaimer.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modalDisclaimer) {
    modalDisclaimer.style.display = "none";
  }
});

//privacy pop-up

var modalPrivacy = document.getElementById("myModalPrivacy");
// Get the button that opens the modal
var btnPrivacy = document.getElementById("myBtnPrivacy");
// When the user clicks on the button, open the modal 
btnPrivacy.onclick = function() {
  modalPrivacy.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modalPrivacy) {
    modalPrivacy.style.display = "none";
  }
});