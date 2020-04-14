const request = require('request');

function getWeather(res, lng, lat){

    const url = `https://api.darksky.net/forecast/${process.env.DARK_SKY}/${lat},${lng}`

    request({url, json:true}, (error, {body}) => {
        if (error) return console.log(error)

        //else

        const temp = body.currently.temperature
        const sum = body.currently.summary
        // const icon = body.currently.icon

        console.log(body)
        res.render("weather", {
            temp: temp,
            sum: sum,
            // icon: icon
            // city: city
        })

    })
    console.log()
}

module.exports = getWeather;