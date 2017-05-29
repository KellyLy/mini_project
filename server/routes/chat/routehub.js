module.exports = (router) => {
    router.get('/', require('./page/index'))
    router.post('/sendMsg', require('./page/sendMsg'))
    //router.get('/item', require('./page/addressItem'))
}