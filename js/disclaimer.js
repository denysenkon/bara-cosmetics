
// Disclaimer 

var modalDisclaimer = document.getElementById("myModalDisclaimer");

// Get the button that opens the modal
var btnDisclaimer = document.getElementById("myBtnDisclaimer");

// When the user clicks on the button, open the modal 
btnDisclaimer.onclick = function() {
  modalDisclaimer.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function() {
  if (event.target == modalDisclaimer) {
    modalDisclaimer.style.display = "none";
  }
}

