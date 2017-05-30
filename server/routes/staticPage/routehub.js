module.exports = (router) => {
    router.get('/:slug', require('./page/index'))
}