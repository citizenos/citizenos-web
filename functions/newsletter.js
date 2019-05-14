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
                Authorization: Buffer.from('anystring:' + process.env.MAILCHIMP_KEY).toString('base64')
            },
            body: JSON.stringify(postData)
        }

        console.log(options)

        http.request(options, response => {
            var body = ''
            console.log(response);

            response.on('data', function(d) {
                body += d
            })

            response.on('end', function() {
                console.log('end');
                console.log(body);
                resolve(body)
            })
        })
  })
}


exports.handler = async (event) => {
    const body = JSON.parse(event.body)
    console.log(body);

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
