const request = require('request');



function getCoord(res, city, callback){
    
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(city)}.json?access_token=${process.env.MAP_BOX}`
    //encodeURIComponent protects the input from unacepted characters
    // request ({url:url, json:true}, callback)
    
    
    request({url, json: true}, (error, {body}) => {
        if (error) return console.log(error)

        //else

        //city name from API return
        const cityName = body.features[0].place_name
        //cordinates from API return
        const [lng, lat] = body.features[0].geometry.coordinates
        

        callback(res, lng, lat)
    })
}

module.exports = getCoord;