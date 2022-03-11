const apiKey = '4e3742872a18e370e48236bda95f04eb';
const inputField = document.getElementById('input-location');
const searchButton = document.getElementById('search-button');

inputField.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
     searchButton.click();
  }
})

searchButton.addEventListener('click', () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
} )

const displayData = (weather) => {
    console.log(weather);
    const iconURL = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    document.getElementById('temperature').innerText = weather.main.temp;
    document.getElementById('weather').innerText = weather.weather[0].main;
    document.getElementById('location').innerText = weather.name;
    document.getElementById('image').setAttribute('src', iconURL) = weather.name;
}
