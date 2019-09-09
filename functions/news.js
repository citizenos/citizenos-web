const http = require('https')
const xml2js = require('xml2js')

const getMediumJson = async () => {
    return new Promise((resolve, reject) => {
        http.get('https://medium.com/feed/citizenos', response => {
            var body = ''

            response.on('data', function(d) {
                body += d
            })

            response.on('end', function() {
                xml2js.parseStringPromise(body).then(function (result) {
                  resolve(result)
                })

            })
        })
  })
}


exports.handler = async (event) => {
    const posts = await getMediumJson()

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'max-age=300, must-revalidate'
        },
        body: JSON.stringify(posts)
    }

    return response
}
