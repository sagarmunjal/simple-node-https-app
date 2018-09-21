const cities = require('cities');

exports.addlog = () => {
    console.log(` module.js has loaded`)
    var myCity = cities.zip_lookup(10016);
    console.log(myCity);
}