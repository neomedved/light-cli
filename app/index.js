const request = require("request")
const app_domain = 'https://light-in-house.herokuapp.com/renew' //'http://localhost:3000/renew'

setInterval( () => {
    request.post(
        app_domain,
        { form: { pass: '595149363f63665a574a4250212d2c6d2b587d6c345f30437037562e4a' } },
        (error, response, body) => {
            if(error)
            {
                console.log(error)
            }
        }
    )
}, 4000) // every 4 seconds (4000)