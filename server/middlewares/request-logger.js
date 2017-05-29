module.exports = (req, res, next) => {
    let method = req.method.toUpperCase()

    let requestInfo = JSON.stringify({
        'url': req.originalUrl,
        'method': method,
        'content-type': req.get('Content-Type'),
        'body': req.method.toUpperCase() === 'POST' ? req.body : void(0),
        'cookies': req.cookies,
        'referer': req.headers.referer,
    })

    console.log('request =>', requestInfo)
    next()
}