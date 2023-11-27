



// var temp = document.getElementById("parent-child");
// console.log(temp);
// console.log(navigator.geolocation.getCurrentPosition(function(location){
//     console.log(location.coords.longitude)
//   var lat = location.coords.latitude;
//   var long = location.coords.longitude;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4b50650dc723fcc4e7550cbe9c019210&units=metric`)
//     .then(function (res){
//         return res.json()
//     })
//     .then(function (data){  
//         temp.innerHTML = data.main.feels_like
//         temp.innerHTML = data.main.humidity
//         temp.innerHTML = data.sys.sunrise
//         temp.innerHTML = data.wind.deg
//         temp.innerHTML = data.main.pressure
//         temp.innerHTML = data.sys.id
//         temp.innerHTML = data.main.feels_like
//         console.log(temp);
//     })
// }))

const searchInput = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const image = document.querySelector('.icon');


async function getWeather(city) {
    var res = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4b50650dc723fcc4e7550cbe9c019210&units=metric`)
   if(res.status == 404){
    document.querySelector(".error").style.display = "block";
   } else{
    document.querySelector(".error").style.display = "none";
   }
   
    var data = await res.json();
    console.log(data);
    document.querySelector('.celsius').innerHTML = Math.round(data.main.temp)  + "°c"
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humiditytyp').innerHTML = Math.round(data.main.humidity) + "%"
    document.querySelector('.winds').innerHTML = Math.round(data.wind.speed) + "km/h"

if(data.weather[0].main =="Clouds   "){
     image.src = "images/cloud img 3.png";
} else if(data.weather[0].main == "Clear"){
    image.src = "images/clear-sun 2.png";
}
//  else if(data.weather[0].main == "Rain"){
//     image.src = "images/rain-cloud 2.png";
// }
else if(data.weather[0].main == "Rain"){
    image.src = "images/rain.png"
}
else if(data.weather[0].main == "Haze"){
    image.src = "images/haze 2.png"
}
else if(data.weather[0].main == "Thunderstrom"){
    image.src = "images/thunder-strom.png"
}
else if(data.weather[0].main == "snow"){
    image.src = "images/snow pic.png"
}




}
 
searchBtn.addEventListener('click', () =>{

    getWeather(searchInput.value);
})






// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//       caches.match(fetchEvent.request).then(res => {
//         return res || fetch(fetchEvent.request)
//       })
//     )
//   })






if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }