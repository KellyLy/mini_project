const http = require('http')
const app = require('../app')

module.exports = (config) => {
    let server = app.listen(config.port, config.host, () => {
        console.log('Express server listening on port: %s', config.port)
    })
}