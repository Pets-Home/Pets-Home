let textNameEl = document.getElementById('name');
let numEl = document.getElementById('number');
let infoEl = document.getElementById('info');
let j =0;


var x = document.getElementById("demo");
function getLocation() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  document.getElementsById('alert-show').disabled=false;

}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
  let data = {
    name: textNameEl.value,
    number: numEl.value,
    info : infoEl.value,
    location : `${ position.coords.latitude} , ${position.coords.longitude}`
  };


  localStorage.setItem(`key,${j}`,JSON.stringify(data));
  j++;
 
}


function alertShown ()
{
alert('Your report has been recived .. Thank you');
textNameEl.value = '';
numEl.value = '';
infoEl.value = '';
location.reload();
}




// var slideIndex = [1,1];
// var slideId = ["mySlides1", "mySlides2"]
// showSlides(1, 0);
// showSlides(1, 1);
// function plusSlides(n, no) {
//   showSlides(slideIndex[no] += n, no);
// }
// function showSlides(n, no) {
//   var i;
//   var x = document.getElementsByClassName(slideId[no]);
//   if (n > x.length) {slideIndex[no] = 1}
//   if (n < 1) {slideIndex[no] = x.length}
//   for (i = 0; i < x.length; i++) {
//      x[i].style.display = "none";
//   }
//   x[slideIndex[no]-1].style.display = "block";
// }



///////////////
//////////////////////
////////////////////////////////
/////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
//to make header scrollable

//to make header scrollable
window.addEventListener('scroll' , () => {
  let header = document.querySelector("header");
  let Home = document.querySelectorAll("a");
  header.classList.toggle("new-header",window.scrollY > 0);
for ( let i = 0 ; i<Home.length ; i++)
{
  Home[i].classList.toggle("new-Home" , window.scrollY > 0);
}
});
