var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}




function showPosition(position) {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "location.php?lat=" + position.coords.latitude + "&long=" + position.coords.longitude );
  xhttp.send();
}