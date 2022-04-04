// Header date:
n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;

// // Get the modal
// let modal = document.getElementById("myModal");
// // Get the button that opens the modal
// let btn = document.querySelector(".myBtn");
// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];
// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }