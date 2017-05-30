module.exports = (router) => {
    router.get('/', require('./page/addressList'))
    router.get('/item', require('./page/addressItem'))
    router.get('/generateCityCode', require('./page/generateCityCode'))
    router.get('/search', require('./ajax/search'))
}