const key ="22581637a56d5563f3b5365e3b4a05fd";
const api = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.getElementById("search-box");
const btn = document.getElementById("btn");

async function weather(){
    const response = await fetch(api + city + `&appid=${apikey}`);
    let data = await response.json();
    console.log(data);
    document.getElementById("city-name").innerHTML = data.name;
    document.getElementById("temp").innerHTML = Math.round(data.main.temp) + `c`;
    document.getElementById("humidity").innerHTML = data.main.humidity + `%`;
    document.getElementById("wind").innerHTML = data.wind.speed + `Km/h`;
}

btn.addEventListener("click",() =>{
    weather();
});