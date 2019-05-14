const http = require('https')


const postToMailChimp = async (data) => {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'citizenos.us19.list-manage.com',
            port: 443,
            path: '/subscribe/post?u=ab576406496d96d9a8387879f&id=d44f990ec5',
            method: 'POST',
            body: data
        }

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
