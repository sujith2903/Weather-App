const input = document.querySelector('form')
const locations = document.querySelector('#location')
const condition = document.querySelector('.condition')
const city = document.querySelector('.city')
const temperature = document.querySelector('.temperature')

input.addEventListener('submit', (event) => {
    event.preventDefault()
})

locations.addEventListener('change', () => {
    getWeatherData()
})

async function getWeatherData() {
    
    console.log(locations.value)
    const response = await fetch('http://api.weatherapi.com/v1/current.json?key=8b5d56e9eee24f158d7225609232506&q=' + `${locations.value}`)
    
    const data = await response.json()

    console.log(data)

    condition.textContent = data.current.condition.text

    city.textContent = `${ data.location.name }` + ', ' + `${data.location.region}` + ', ' + `${data.location.country}`

    temperature.textContent = `${data.current.temp_f}` + ' °F'
}

getWeatherData()