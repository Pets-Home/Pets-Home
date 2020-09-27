let textNameEl = document.getElementById('name');
let numEl = document.getElementById('number');
let infoEl = document.getElementById('info');
let j =0;
j++;

var x = document.getElementById("demo");
function getLocation() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

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

  j++;
  localStorage.setItem(`key,${j}`,JSON.stringify(data));


}


function alertShown ()
{
alert('Your report has been recived .. Thank you');
}




