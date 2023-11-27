



var temp = document.getElementById("parent-child");
console.log(navigator.geolocation.getCurrentPosition(function(location){
    console.log(location.coords.longitude)
  var lat = location.coords.latitude;
  var long = location.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4b50650dc723fcc4e7550cbe9c019210&units=metric`)
    .then(function (res){
        return res.json()
    })
    .then(function (data){
        temp.innerHTML = data.main.feels_like
        temp.innerHTML = data.main.humidity
        temp.innerHTML = data.sys.sunrise
        temp.innerHTML = data.wind.deg
        temp.innerHTML = data.main.pressure
        temp.innerHTML = data.sys.id
        console.log(data)
    })
}))
