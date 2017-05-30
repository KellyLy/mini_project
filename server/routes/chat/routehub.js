module.exports = (router) => {
    router.get('/', require('./page/index'))
    router.post('/sendMsg', require('./ajax/sendMsg'))
}