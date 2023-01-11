const http = require('https')


const getStatsAPI = async () => {
    return new Promise((resolve, reject) => {
        http.get('https://api.citizenos.com/api/stats', response => {
            var body = ''

            response.on('data', function(d) {
                body += d
            })

            response.on('end', function() {
                try {
                    var parsed = JSON.parse(body)
                    resolve(parsed.data)
                } catch (e) {
                    console.error(e)
                    resolve({
                        topicsCreated: 0,
                        votesCast: 0,
                        groupsCreated: 0,
                        usersCreated: 0
                    })
                }
            })
        }).on('error', (e) => {
            console.error(e)
            resolve({
                topicsCreated: 0,
                votesCast: 0,
                groupsCreated: 0,
                usersCreated: 0
            })
        })
  })
}


exports.handler = async (event) => {
    const api = await getStatsAPI()

    const result = {
        topicsCreated: api.topicsCreated,
        votesCast: api.votesCast,
        groupsCreated: api.groupsCreated,
        usersCreated: api.usersCreated
    }

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
