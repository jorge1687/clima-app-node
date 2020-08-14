const axios = require('axios');



const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=e4afdb128f02d744f945ee87d7402851&units=metric`)

    return resp.data.main.temp;

}


module.exports = {
    getClima
}