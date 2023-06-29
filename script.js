const form = document.querySelector('form')
const locations = document.querySelector('#location')

form.addEventListener('submit', (event) => {
    event.preventDefault()
})

locations.addEventListener('change', (event) => {
    console.log(event.target.value)
})