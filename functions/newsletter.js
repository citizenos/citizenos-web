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

            response.on('data', function (d) {
                body += d
            })

            response.on('end', function () {
                resolve(JSON.parse(body))
            })
        })

        request.on('error', reject)
        request.write(JSON.stringify(postData))
        request.end()
    })
}


const getResponse = (code, data) => {
    return {
        statusCode: code,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    }
}


exports.handler = async (event) => {
    const body = JSON.parse(event.body)

    if (body && body.email) {
        const result = await postToMailChimp(body.email)

        if (result.status === 'subscribed') {
            return getResponse(200, { status: result.status })
        } else {
            return getResponse(500, { error: result.title })
        }
    } else {
        return getResponse(400, { error: 'Bad Request' })
    }
}
