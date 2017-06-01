const PageCgiBase = require('../../pageCgiBase')

const addressModel = require('../../../models/address/index')

// 地区列表页面渲染
class AddressListPage extends PageCgiBase {
    constructor() {
        super(...arguments)
    }

    handle() {
        // this.res.locals.search_data = { "code": 0, "mess": "", "data": [{ "addressImg": "http://qcloud.dpfile.com/pc/GVv3TJTe5m8Se8kmy9pYW9uF7PBwwdDfGj7UDrmH5u1UcJqbtVuEIhdOh33JaeZKTYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "天誉国际影城", "addressDetail": "南湾街道樟树布法瑞姿大厦5层", "starLevel": "准五星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/iIlisukp3LXFXepy7yH5UhhsVA9PtYP965bAmUeoN-1ztojF5E8Yc6oHqMAb8ekUTYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "纵横国际影城ZMAX巨幕(天安云谷...", "addressDetail": "坂田街道雪岗路2018号天安云谷产业园一期3栋D座3层", "starLevel": "五星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/kMUm2sXgwVfYDHABNi9bySrgXpV0Zfhfv1FcQmHkbPGeJMpqO_0Wlf749hpM_wmXTYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "中影南国影城(宝安店)", "addressDetail": "宝安80区宝民二路港隆城购物中心4楼", "starLevel": "五星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/kHXjky7FtanvYSHCaya6evzBIIC6S1_EiXZdGQwfluHfN6GD37J2cJPcLSq56AROTYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "金逸影城(龙华东环店)", "addressDetail": "建设路与东环路交界处人人乐百货（原崇尚百货）4楼", "starLevel": "五星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/M1mBwJg8-sISlb3xmHocAl_UFTW7FNGzN6Kd_GkuY1VjNbOEPhrJBHd-GRFKX-kPTYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "卢米埃华强北九方IMAX影城", "addressDetail": "中航路1号华强北九方购物中心4-6楼", "starLevel": "五星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/PDNrqmM7flaBZaho4kHWtP9DaaVS270ezO5zYUrEQ_vXGKo3zworMPi9Tm0L3RcbTYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "中影face电影城(平湖店)", "addressDetail": "平湖街道凤凰大道凤凰新村商业广场-1", "starLevel": "准四星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/J98Q4moqv_Pw7l-V2Qiz53fwC6W5YO0xCWi7Vl2eeLHwZFlhe9LLqGXNi8VZbnlBTYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "星烨南岭国际影城", "addressDetail": "南湾街道南岭村社区开放街8号501室", "starLevel": "准五星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/wxLNcENrpmLyWzomI3dEaETroe_MaI7n__ucy27BDw7LQB-0bArhjlEnE6UFfYKHTYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "中影星美国际影城(天虹购物中心...", "addressDetail": "西乡大道与新湖路交汇处天虹购物中心东座3楼", "starLevel": "五星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/4VsGVCB3MDfCq8wqKnp9-w8R-ykD8Q1QZu39smivD3CyjmRRM8NP8Nd8kdrR4TXATYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "万众国际影城(neo大厦店)", "addressDetail": "深南香蜜立交车公庙j出口NEO大厦A栋3楼", "starLevel": "准五星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/EqxEi1EVQJcFrGxAUuzUgCcufklskoflrf6WcGA2LGH_xN3KgatpMX87uTW84kzhTYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "大地影院(观澜店)", "addressDetail": "观澜街道桂澜社区观澜大道419号兴万达广场5楼", "starLevel": "准五星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/NsGA2lyMtug9IpfQTbswz-ArXNBvI-d7vI6XviqkuzvbbxPE3IGvV12WUA0dHjMWTYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "云幕国际影城(西乡店)", "addressDetail": "西乡大道与工业路交口大益广场对面共乐城购物中心四楼", "starLevel": "准五星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/fZHTjpXO4RkDOgKo-dC1ibmFWnsI5MToRWOhJBEiNJnQOPXIiitmuCw61CLw92zyTYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "金逸影城(碧海店)", "addressDetail": "西乡兴业路3004号七巧国四楼", "starLevel": "五星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/Fwe-m-hgMgBaSQ8iQ_gCHmcGWUtJc92GGc498hSMunbc619awVx_uXvi-6FdB6zZTYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "卢米埃影城(汇港imax店)", "addressDetail": "蛇口工业三路1号汇港3楼", "starLevel": "四星商户" }, { "addressImg": "http://i2.s2.dpfile.com/cms/20121213", "addressName": "华夏星光国际影城(海德二道店)", "addressDetail": "海德二道南山书城7楼", "starLevel": "五星商户" }, { "addressImg": "http://qcloud.dpfile.com/pc/BCovM1hfFZJy3QMB30qizX3lndYIOzjtRQESuhMcjkv2a8U63xKI9UslU0lIcoL1TYGVDmosZWTLal1WbWRW3A.jpg", "addressName": "中影国际影城(假日广场店)", "addressDetail": "深南大道9028号益田假日广场L3楼", "starLevel": "准五星商户" }] }
        // this.res.$render('address/addressList')
        new Promise((resolve, reject) => {
            const cityCode = this.req.query.cityCode
            const keyword = this.req.query.keyword
            const pageNum = this.req.query.pageNum || 1
            resolve(addressModel.search(cityCode, keyword, pageNum))
        }).then(result => {
            this.res.locals.search_data = result
            this.res.$render('address/addressList')
        }).catch(err => console.log(err))
    }
}

module.exports = AddressListPage.makeRouteHandler()