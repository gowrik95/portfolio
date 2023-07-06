/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } 
  else {
    x.className = "topnav";
  }
  
}
function checkClickFunc()
{
 var checkbox = document.getElementById('darkmode-toggle');
 let mainContent = document.querySelector('#main_content');
 if (checkbox.checked == true)
 {
  alert("Checkbox is clicked");
 }
}
