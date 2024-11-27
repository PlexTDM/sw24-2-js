const KEY = '35fe087bcd9090205a54aaab58e53197';
// const tempP = document.getElementById('temperature');
// const tempIcon = document.getElementById('temperatureIcon');
// const tempDesc = document.getElementById('temperatureDescription');

// const getCoords = async (city) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}`;

//     let data = await fetch(url, {
//         method: 'GET'
//     }).then(res => {
//         return res.json()
//     });
//     console.log(data)
//     return data.coord
// }

// const getWeather = async () => {
//     const coord = await getCoords('seoul');
//     const lon = coord.lon;
//     const lat = coord.lat;
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`

//     let weather = await fetch(url, {
//         method: 'GET'
//     }).then(res => {
//         return res.json()
//     });
//     const iconcode = weather.weather[0].icon;
//     const iconurl = `https://openweathermap.org/img/wn/${iconcode}@2x.png`;
//     tempIcon.src = iconurl;
//     tempDesc.innerText = weather.weather[0].description;
//     tempP.innerText = Math.floor(weather.main.temp);
//     console.log(weather);
// }
// getWeather()


// const getCoords = async () => {

//     const URI = `https://api.openweathermap.org/data/2.5/weather?q=Ulaanbaatar&appid=${KEY}&units=metric`;
//     const res = await fetch(URI);
//     const hariu = await res.json();
//     console.log(hariu);

//     return hariu.coord
// }

// getCoords()

// async function getTemp() {

//     const coords = await getCoords();
//     const lat = coords.lat
//     const lon = coords.lon
//     const URI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`;

//     const res = await fetch(URI);
//     const hariu = await res.json();
//     console.log(hariu, hariu.main.temp)
// }

// getTemp()
