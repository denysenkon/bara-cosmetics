
// Disclaimer 

var modalDisclaimer = document.getElementById("myModalDisclaimer");

// Get the button that opens the modal
var btnDisclaimer = document.getElementById("myBtnDisclaimer");

// Get the <span> element that closes the modal
var spanDisclaimer = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btnDisclaimer.onclick = function() {
  modalDisclaimer.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanDisclaimer.onclick = function() {
  modalDisclaimer.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(eventDisclaimer) {
  if (eventDisclaimer.target == modalDisclaimer) {
    modalDisclaimer.style.display = "none";
  }
}

// informativa sulla privacy


var modalPrivacy = document.getElementById("myModalPrivacy");

// Get the button that opens the modal
var btnPrivacy = document.getElementById("myBtnPrivacy");

// Get the <span> element that closes the modal
var spanPrivacy = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btnPrivacy.onclick = function() {
  modalPrivacy.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanPrivacy.onclick = function() {
  modalPrivacy.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(eventPrivacy) {
  if (eventPrivacy.target == modalPrivacy) {
    modalPrivacy.style.display = "none";
  }
}


// termini
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
