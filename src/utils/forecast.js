const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/forecast?access_key=c8a81111701ab07efc2b283cec532f07&query='+ latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, ' It is currently ' + body.current.weather_descriptions[0]+ ' degress out. It feels like ' + body.current.feelslike + ' degrees.'
            +'The current humidity is '+body.current.humidity+'%')
        }
    })
}

module.exports = forecast