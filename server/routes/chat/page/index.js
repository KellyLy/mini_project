const PageCgiBase = require('../../pageCgiBase')

class Index extends PageCgiBase {
    constructor() {
        super(...arguments)
    }

    handle() {
        this.res.$render('chat/index')
    }
}

module.exports = Index.makeRouteHandler()