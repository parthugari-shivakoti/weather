const apiKey = '113f26a20c5e328c3bef125b92768068';
const cityname = document.querySelector('.input').value;
function posting(){
    let cityname = document.querySelector('.input').value;
    let city = document.querySelector('.city-name');
    city.innerHTML= cityname;
    document.querySelector('.input').value = '';
    if(cityname.trim()!=""){
        updateWeatherInfo(cityname)
    }
}
async function getFetchData(endPoint,city){
    const apiurl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apiKey}&units=metric`;

    const response =await fetch(apiurl)
    return response.json()
}
async function updateWeatherInfo(city1){
    const weatherData =await getFetchData('weather',city1);
    console.log(weatherData.main.pressure);
    const temp = weatherData.main.temp;
    document.querySelector('.celcius').innerHTML = temp+' °C';
     // This will print 29.8
}
