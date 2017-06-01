const PageCgiBase = require('../../pageCgiBase')

const addressModel = require('../../../models/address/index')

// 关键词搜索( ajax接口 )
class Search extends PageCgiBase {
    constructor() {
        super(...arguments)
    }

    handle() {
        new Promise((resolve, reject) => {
            const cityCode = this.req.query.cityCode
            const keyword = this.req.query.keyword
            const pageNum = this.req.query.pageNum || 1
            resolve(addressModel.search(cityCode, keyword, pageNum))
        }).then(result => {
            this.res.$json(result)
        }).catch(err => console.log(err))
    }
}

module.exports = Search.makeRouteHandler()