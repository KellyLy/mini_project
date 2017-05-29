const argv = require('minimist')(process.argv.slice(2))

const ENV = argv.env || 'production'
const PROJECT_NAME = 'mini'

module.exports = {
    'env': ENV,
    'projectName': PROJECT_NAME,
    'host': '127.0.0.1',
    'port': '8888'
}