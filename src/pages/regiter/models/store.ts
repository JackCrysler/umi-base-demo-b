import {goLogin} from '../services'
import Cookie from 'js-cookie'
import router from 'umi/router'
export default {
    namespaced: true,
    state:{},
    reducers:{

    },
    effects:{
        *saveToken(action:any, effects:any){
            let {call} = effects

            let res = yield call(goLogin, action.payload)

            Cookie.set('token',res.token)

            setTimeout(()=>{

                router.push('/home')
            },500)
        }
    }
}
