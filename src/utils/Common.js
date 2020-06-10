export const request = (url,params)=>{
    let arr=[]
    for(let key in params){
        arr.push(`${key}=${params[key]}`)
    }
    let requestUrl = url+'?'+arr.join('&')
    return new Promise((resolve,reject)=>{
         fetch(requestUrl).then((res)=>{
            resolve(res)
         }).catch((err)=>{
            reject(err)
         })
    })
}