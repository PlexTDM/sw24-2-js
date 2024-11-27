const KEY = '35fe087bcd9090205a54aaab58e53197';
const tempP = document.getElementById('temperature');
const tempIcon = document.getElementById('temperatureIcon');
const tempDesc = document.getElementById('temperatureDescription');

const getCoords = async () => {

    const URI = `https://api.openweathermap.org/data/2.5/weather?q=Ulaanbaatar&appid=${KEY}&units=metric`;
    const res = await fetch(URI);
    const hariu = await res.json();
    console.log(hariu);

    return hariu.coord
}

getCoords()
