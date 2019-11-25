import React, {useState} from 'react'
import {connect} from "dva";
import {userinfo} from './services'
import createModal from '@/components/modal'
const Login = (props:any)=>{
    let [username, setUserName] = useState('')
    let [password, setPassword] = useState('')
    let {gologin} = props;
    let modal = createModal()
    let loginAction = ()=>{
        if(!username || !password){
            modal.open({
                content:"请填写用户信息"
            })
            return
        }
        gologin({username, password})
    }
    

    return (
        <ul>
            <li> 用户名：<input value={username} type="text" onChange={(e)=>{
                setUserName(e.target.value)
            }}/></li>
            <li>密码：<input value={password} type="password" onChange={(e)=>{
                setPassword(e.target.value)
            }}/></li>
            <li><button onClick={loginAction}>登陆</button></li>
        </ul>
    )
}

const mapDispatch = (dispatch:any)=>{
    return {
        gologin(payload:userinfo){
            dispatch({
                type: 'store/saveToken',
                payload:{
                    user_name: payload.username,
                    user_pwd: payload.password
                }
            })
        }
    }
}

export default connect(null,mapDispatch)(Login)
