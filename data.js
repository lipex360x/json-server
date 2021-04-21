require('dotenv').config();
const api = require('./src/services/axios');

(async function (){
  const { data } = await api.get('users')

  console.log(data)

})()
