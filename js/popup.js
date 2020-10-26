// termini
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

// Disclaimer 

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

//privacy
var modalPrivacy = document.getElementById("myModalPrivacy");
// Get the button that opens the modal
var btnPrivacy = document.getElementById("myBtnPrivacy");
// When the user clicks on the button, open the modal 
btnPrivacy.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  if (event.target == modalPrivacy) {
    modalPrivacy.style.display = "none";
  }
});