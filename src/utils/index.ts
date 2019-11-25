import qs from 'querystring'
// import "isomorphic-fetch" polyfill
interface C{
    method: 'GET'|"POST",
    headers?: any,
    params?: any
}
let request = (url:string, config:C)=>{
    url = process.env.NODE_ENV==='development'? '/api'+url :url
    return new Promise((resolve,reject)=>{
        if(config.method==='GET'){
            let query = '?'+qs.stringify(config.params);
            
            fetch(url+query,{
                headers: new Headers({
                    "Content-Type":"application/json",
                    ...config.headers
                })
            })
            .then(res=>res.json())
            .then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        }else{
            console.log(JSON.stringify(config.params))
            fetch(url,{
                method: config.method,
                headers: new Headers({
                    "Content-Type":"application/json",
                    ...config.headers
                }),
                body: JSON.stringify(config.params)
            })
            .then(res=>res.json())
            .then(res=>{
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        }
        
    })
}

export default request
