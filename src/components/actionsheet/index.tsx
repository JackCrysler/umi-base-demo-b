import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.css'
import Animate from 'rc-animate'

//action组件
let Actionsheet = (props: any) => {
    let {close, list, cancelText="取消", callback} = props;
    let [flag, toggleFlag] = React.useState(false);
    React.useEffect(()=>{
        toggleFlag(true)
    },[])

    let closeFunc = ()=>{
        toggleFlag(false)
    }
    let pickItem = (selected:any)=>{
        callback &&  callback(selected)
        toggleFlag(false)
    }
    return (
        <div className={styles.__actionsheet__}>
            <Animate transitionName='slideup' transitionAppear onEnd={()=>{!flag && close()}}>
                {flag && <div className={styles.__actionsheet__wrap}>
                    <div className={styles.__actionsheet__content}>
                        <ul>
                            {
                                list.map((item:any,index:number)=>{
                                    return <li onClick={()=>{pickItem(item.name)}} key={index}>{item.name}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className={styles.__actionsheet__btns}>
                        <span className={styles.__actionsheet__btns__cancel} onClick={closeFunc}>{cancelText}</span>
                    </div>
                </div>}
            </Animate>
        </div>
    )
}

interface actionConfig{
    list: object[],
    cancelText?: string,
    callback: Function
}
//func service
const createActionsheet = () => {
    //javascript
    let actionNode:any;
    if (document.querySelector('.__actionsheet__')) {
        actionNode = document.querySelector('.__actionsheet__')
    } else {
        actionNode = document.createElement('div')
        actionNode.className = "__actionsheet__"

        document.body.appendChild(actionNode)
    }

    return {
        open(config:actionConfig) {
            ReactDOM.render(<Actionsheet {...config} close={this.close} />, actionNode)
        },
        close() {
            ReactDOM.unmountComponentAtNode(actionNode)
        }
    }
}


export default createActionsheet
