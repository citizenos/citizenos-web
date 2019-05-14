const http = require('https')


const postToMailChimp = async (data) => {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'citizenos.us19.list-manage.com',
            path: '/subscribe/post?u=ab576406496d96d9a8387879f&id=d44f990ec5',
            body: data
        }
        https.request(options, response => {
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
    const result = await postToMailChimp(event.body)
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(result)
    }

    return response
}
