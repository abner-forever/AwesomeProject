export const request = (url, params) => {
    let arr = []
    for (let key in params) {
        arr.push(`${key}=${params[key]}`)
    }
    let requestUrl = url + '?' + arr.join('&')
    return new Promise((resolve, reject) => {
        fetch(requestUrl).then((res) => {
            resolve(res)
        }).catch((err) => {
            reject(err)
        })
    })
}
/**
 * 根据返回的时间戳处理距离现在的时间
 * 小于一分钟 展示几秒钟前
 * 1分钟到30分钟 展示几分钟前
 * 30分钟到1小时 展示半小时前
 * 大于一小时 展示 一小时前 
 * 2小时 就是 2小时前
 * 24小时就展示一天前
 * 2天就两天前
 * 7天 一周前
 * 2周 2周前
 * 1月 一月前
 * */
export const formatTime = (timestamp) => {
    let now = Date.now()
    const cutTime = now - Number(timestamp)   //过去的时间
    var second = 1000
    var minute = second*60
    var halfHour = minute*30
    var hour = halfHour*2

    const timeRule=[
        {
            key:minute,
            value:'秒前'
        },{
            key:halfHour,
            value:'分钟前'
        }
    ]
    if(cutTime<timeRule){

    }
}