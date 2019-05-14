const http = require('https')


const postToMailChimp = async (email) => {
    return new Promise((resolve, reject) => {
        const postData = {
            'email_address': email,
            'status': 'subscribed'
        }

        const options = {
            hostname: process.env.MAILCHIMP_HOST,
            port: 443,
            path: process.env.MAILCHIMP_PATH,
            method: 'POST',
            headers: {
                Authorization: Buffer.from('anystring:' + process.env.MAILCHIMP_HOST).toString('base64')
            }
            body: JSON.stringify(postData)
        }

        console.log(options)

        http.request(options, response => {
            var body = ''

            response.on('data', function(d) {
                body += d
            })

            response.on('end', function() {
                resolve(body)
            })
        })
  })
}


exports.handler = async (event) => {
    const body = JSON.parse(event.body)
    const result = await postToMailChimp(body.email)
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(result)
    }

    return response
}
