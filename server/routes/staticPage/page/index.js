const fs = require('fs')

const PageCgiBase = require('../../pageCgiBase')

// 静态页面渲染
class StaticPageRender extends PageCgiBase {
    constructor() {
        super(...arguments)
    }

    handle() {
        const _this = this
        const slug = this.req.params.slug
        fs.exists(SERVER_ROOT + `/views/staticPage/${slug}.ejs`, function(exists) {  
            if(!exists){
                _this.res.$send('对不起，您访问的页面不存在')
            } else {  
                _this.res.$render(`staticPage/${slug}`)
            }
        })
    }
}

module.exports = StaticPageRender.makeRouteHandler()