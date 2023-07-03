const input = document.querySelector('form')
const locations = document.querySelector('#location')
const condition = document.querySelector('.condition')
const city = document.querySelector('.city')
const temperature = document.querySelector('.temperature')
const img = document.querySelector('img')
const feelsLike = document.querySelector('.feels-like')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind-speed')

input.addEventListener('submit', (event) => {
    event.preventDefault()
})

locations.addEventListener('change', () => {
    getWeatherData()
})

async function getWeatherData() {
    
    console.log(locations.value)
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=8b5d56e9eee24f158d7225609232506&q=' + `${locations.value}`,{ mode: 'cors'})
    
    const data = await response.json()

    console.log(data)

    condition.textContent = data.current.condition.text

    city.textContent = `${ data.location.name }` + ', ' + `${data.location.region}` + ', ' + `${data.location.country}`

    temperature.textContent = `${data.current.temp_f}` + ' °F'

    img.src = data.current.condition.icon

    feelsLike.textContent = 'Feels Like :' + ` ${data.current.feelslike_f}` + ' °F'

    humidity.textContent = 'Humidity :' + ` ${data.current.humidity}` + '%'

    wind.textContent = 'Wind Speed :' + ` ${data.current.wind_mph}` + ' mph'
}

getWeatherData()