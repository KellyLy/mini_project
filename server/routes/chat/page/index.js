const PageCgiBase = require('../../pageCgiBase')

// 地区列表页面渲染
class Index extends PageCgiBase {
    constructor() {
        super(...arguments)
    }

    handle() {
        this.res.$render('chat/index')
    }
}

module.exports = Index.makeRouteHandler()