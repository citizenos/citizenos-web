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


const getStatsERE = async () => {
    return new Promise((resolve, reject) => {
        http.get('https://kodanik.elurikkuseerakond.ee/api/stats', response => {
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


const getStatsRAA = async () => {
    return new Promise((resolve, reject) => {
        resolve({
            topicsCreated: 0,
            votesCast: 80000,
            groupsCreated: 0,
            usersCreated: 50000
        })
    })
}


exports.handler = async (event) => {
    const apiPromise = getStatsAPI()
    const erePromise = getStatsERE()
    const raaPromise = getStatsRAA()

    const api = await apiPromise
    const ere = await erePromise
    const raa = await raaPromise

    const result = {
        topicsCreated: api.topicsCreated + ere.topicsCreated + raa.topicsCreated,
        votesCast: api.votesCast + ere.votesCast + raa.votesCast,
        groupsCreated: api.groupsCreated + ere.groupsCreated + raa.groupsCreated,
        usersCreated: api.usersCreated + ere.usersCreated + raa.usersCreated
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
