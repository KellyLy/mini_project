const PageCgiBase = require('../../pageCgiBase')

class SendMsg extends PageCgiBase {
    constructor() {
        super(...arguments)
    }

    handle() {
        const post = this.req.body;
        io.sendMsgTo(post.to.openId, post)
        this.res.$json({
            code: 0,
            msg: "发送成功",
            data: {}
        })
    }
}

module.exports = SendMsg.makeRouteHandler()