const http = require('https')


const getStatsJson = async () => {
    return new Promise((resolve, reject) => {
        http.get('https://api.citizenos.com/api/stats', response => {
            var body = ''

            response.on('data', function(d) {
                body += d
            })

            response.on('end', function() {
                var parsed = JSON.parse(body)
                resolve(parsed.data)
            })
        })
  })
}


exports.handler = async (event) => {
    const result = await getStatsJson()

    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Cache-Control': 'max-age=300, must-revalidate'
        },
        body: JSON.stringify(result)
    }

    return response
}
