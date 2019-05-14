const https = require('https')


const postToMailChimp = async (email) => {
    return new Promise((resolve, reject) => {
        const postData = {
            'email_address': email,
            'status': 'subscribed'
        }

        const options = {
            hostname: process.env.MAILCHIMP_HOST,
            path: process.env.MAILCHIMP_PATH,
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + Buffer.from('anystring:' + process.env.MAILCHIMP_KEY).toString('base64'),
                'Content-Type': 'application/json'
            }
        }

        const request = https.request(options, response => {
            var body = ''

            response.on('data', function(d) {
                body += d
            })

            response.on('end', function() {
                resolve(body)
            })
        })

        request.on('error', reject)
        request.write(JSON.stringify(postData))
        request.end()
    })
}


exports.handler = async (event) => {
    const body = event.body
    console.log(body)

    if (event.body || event.body.email) {
        const result = await postToMailChimp(event.body.email)

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: result
        }
    } else {
        return {
            statusCode: 400,
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Bad Request' })
        }
    }
}
