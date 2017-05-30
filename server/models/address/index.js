const fetch  = require('node-fetch')
const cheerio = require('cheerio')
const async = require('async')
const fs = require('fs')

const baseUrl = 'https://www.dianping.com'

// 生成大众点评城市编号文件
function generateCityCode() {
    fetch(baseUrl + '/citylist')
        .then(res => res.text())
        .then(body => {
                const $ = cheerio.load(body)
                let cityList = []
                $('#divPY a').each((index, ele) => {
                    if($(ele).attr('href') === '#') return
                    cityList.push({
                            cityName : $(ele).text(),
                            cityPage : baseUrl + $(ele).attr('href'),
                            cityCode : -1
                    })
                })
                return cityList
        })
        .then(cityList => {
            let cityListLen = cityList.length
            let newCityList = []
            const limit = 50
            async.mapLimit(cityList, limit, function(cityItem, callback){ 
                fetch(cityItem.cityPage)
                        .then(res => res.text())
                        .then(body => {
                            const $ = cheerio.load(body)
                            const cityid = $('#G_s').attr('data-s-cityid')
                            if(cityid){
                                cityItem.cityCode = $('#G_s').attr('data-s-cityid')
                                newCityList.push(cityItem)
                            }
                            console.log(`${--cityListLen} undone! ${cityItem.cityCode || ''}`)
                            console.log(cityItem)
                            return callback(null, cityItem)
                        })
                        .catch(err => console.error(err))
                }, 
                function(error){
                    if(error) console.log(error)
                    fs.writeFile(SERVER_ROOT + '/cityCode.json', JSON.stringify(newCityList), function(err){
                        if(err) throw err
                        console.log("Export cityCode Success!")
                    })
                })
        })
        .catch(err => console.error(err))
}

// 关键词搜索
function search(cityCode, keyword, pageNum = 1){
    if(!cityCode || !keyword) return {code : -1, mess : 'parameter error', data : []}
    const searchUrl = encodeURI(baseUrl + `/search/keyword/${parseInt(cityCode)}/0_${keyword}/p${pageNum}`)
    let addressList = []
    return fetch(searchUrl)
        .then(res => {
            if(res.status != 200){
                return { code : -1, mess : 'no result', data : [] }
            } else {
                return res.text()                
            }
        })
        .then(body => {
            if( body.code == -1 ) return body
            const $ = cheerio.load( body )
            console.log('parsing...')
            $('#shop-all-list li').each((index, ele) => {
                addressList.push({
                    addressImg : $(ele).find('.pic img').attr('data-src'),
                    addressName : $(ele).find('.txt .tit h4').text(),
                    addressDetail : $(ele).find('.txt .tag-addr .addr').text(),
                    starLevel : $(ele).find('.txt .comment .sml-rank-stars').attr('title')
                })
            })
            return { code : 0, mess : '', data : addressList }
        })
        .catch(err => console.error(err))
}

module.exports = {
    generateCityCode : generateCityCode,
    search : search
}