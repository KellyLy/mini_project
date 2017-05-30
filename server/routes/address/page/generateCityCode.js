const fs = require('fs')

const PageCgiBase = require('../../pageCgiBase')
const addressModel = require('../../../models/address/index')

// 生成大众点评城市编号文件
class GenerateCityCode extends PageCgiBase {
    constructor() {
        super(...arguments)
    }

    handle() {
        const _this = this
        fs.exists(SERVER_ROOT + '/cityCode.json', function(exists) {  
            if(!exists){
                _this.res.$send('正在后台生成城市编号文件，请稍候再访问吧 ~')
                addressModel.generateCityCode()
            } else {
                _this.res.sendFile(SERVER_ROOT + '/cityCode.json')
            }
        })
    }
}

module.exports = GenerateCityCode.makeRouteHandler()