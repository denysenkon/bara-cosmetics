// informativa sulla privacy
var privacy = document.getElementById("myModalPrivacy");

// Get the button that opens the modal
var privacyBtn = document.getElementById("myBtnPrivacy");

// When the user clicks on the button, open the modal 
privacyBtn.onclick = function () {
  privacy.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == privacy) {
    privacy.style.display = "none";
  }
}