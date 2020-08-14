const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodeurl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeurl}`,
        timeout: 1000,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "506dba05f8mshbfad883336506f9p1afb73jsn4d6386900616"
        }
    });

    const resp = await instance.get();

    if (resp.data.Results === null) {
        throw new Error(`Regreso null para ${ dir }`);
    } else {

        if (resp.data.Results.length === 0) {
            throw new Error(`No hay resultados para ${ dir }`);
        }

    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    /*instance.get().then(resp => {
        console.log('OK ----> ', resp.data.Results);
    }).catch(err => {
        console.log('Error ---> ' + err);
    });*/


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}