document.querySelector("#form").addEventListener("submit",myfun);

function myfun(){
    event.preventDefault();
var name=document.querySelector("#name").value;
console.log(name)
const url=`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=ca431aff7a4cd819da4783af4b446743`;
    
fetch(url)
.then(function (res){
    return res.json();
})
.then(function (res){
    console.log(res);
    append(res);
})
.catch(function (err){
    console.log(err);
});

function append(data){
    let container = document.getElementById("cont");
  let map = document.getElementById("gmap_canvas");
  container.innerHTML = null;
  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

  let city = document.createElement("p");
  city.innerText = `City: ${data.name}`;
  city.style.color="red";

  let min = document.createElement("p");
  min.innerText = `Min temp:${Math.floor(data.main.temp_min-273)}℃`;
min.style.color="indigo"
  let max = document.createElement("p");
  max.innerText = `Max temp: ${Math.floor(data.main.temp_max-273)}℃`;
  max.style.color="green"
  let wind=document.createElement("p");
    wind.innerText=`Wind speed: ${data.wind.speed}m/s` 
    wind.style.color="green" 
  let clouds=document.createElement("p");
  clouds.innerText=`Cloud: ${data.clouds.all}%`;
  clouds.style.color="blue"
  let sunrise=document.createElement("p");
  sunrise.innerText=`Sunrise: ${data.sys.sunrise}`;
  sunrise.style.color="red"
  let sunset=document.createElement("p");
  sunset.innerText=`Sunset: ${data.sys.sunset}`;
  sunset.style.color="violet"

  let current = document.createElement("p");
  current.innerText = `Current Temp: ${Math.floor(data.main.temp-273)}℃`;
  current.style.color="brown"
  let humidity = document.createElement("p");
  humidity.innerText = `Humidity: ${data.main.humidity}%`;
  humidity.style.color="teal"
 
  container.append(city, min,max,wind,sunrise,sunset,clouds,current, humidity);
}
}
