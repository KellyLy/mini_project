const PageCgiBase = require('../../pageCgiBase')

// 地区列表页面渲染
class SendMsg extends PageCgiBase {
    constructor() {
        super(...arguments)
    }

    handle() {
        const post = this.req.body;
        io.sendMsgTo(post.to.openId, post)
        this.res.json({
            code: 0,
            msg: "发送成功",
            data: {}
        })
    }
}

module.exports = SendMsg.makeRouteHandler()