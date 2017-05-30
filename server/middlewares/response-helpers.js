module.exports = (req, res, next) => {
    // 记录请求开始时间
    let beginTime = Date.now()

    _.each(['json', 'send'], function(fn) {
        res['$' + fn] = (body) => {

            // 调用`res`原始方法
            res[fn](body)

            // 计算请求耗时
            let timeCost = Date.now() - beginTime

            let logInfo = 'response =>' + JSON.stringify({
                'url': req.originalUrl,
                'method': req.method,
                'content-type': res.get('Content-Type'),
                'body': body,
                'timeCost': timeCost,
            })

            // 打印日志
            console.log(logInfo)

            return res
        }
    })

    res.$render = (view, locals, callback) => {
        res.render(view, locals, callback)

        // 计算请求耗时
        let timeCost = Date.now() - beginTime

        let logInfo = 'render page => ' + JSON.stringify({
            'url': req.originalUrl,
            'method': req.method,
            'content-type': res.get('Content-Type'),
            'timeCost': timeCost,
        })

        // 打印日志
        console.log(logInfo)
    }

    next()
}