const cities = require('cities');

exports.findcityname = (zip) => {
    return cities.zip_lookup(zip).city;
}

exports.addlog = () => {
    console.log(` module.js has loaded`)
}