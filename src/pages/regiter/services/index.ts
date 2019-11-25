import request from '@/utils'
/**
 * login
 * @return token
 *  */ 
export interface userinfo{
    username:string,
    password:string
}
export const goLogin = (params:userinfo)=>{
    return request('/store/login',{
        method:"POST",
        params
    })
}
