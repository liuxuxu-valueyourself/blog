const axios1 = require('axios')
const axios = axios1.create({
  baseURL: 'http://localhost:8082/api'
})
export default axios
