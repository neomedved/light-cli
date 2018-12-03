const request = require("request")
const app_domain = 'https://light-in-house.herokuapp.com/renew'

setInterval(function() {
    request.post(
        app_domain,
        { json: { pass: '595149363f63665a574a4250212d2c6d2b587d6c345f30437037562e4a' } },
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
            }
        }
    )
}, 1000) // every second (1000)