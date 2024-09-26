import axios from 'axios'

axios.get('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available')
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.log(error)
    })