import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.css'
//modal组件
let Modal = (props: any) => {
    let {close, title="提示", content, certainText="确定", cancelText="取消"} = props
    React.useEffect(() => {
        console.log('component lifecircle')
        return () => {//组件销毁之后的回掉函数
            console.log('component destroyed')
            props.callback && props.callback()
        }
    })
    return (
        <div className={styles.__modal__}>

            <div className={styles.__modal__wrap}>
                <p className={styles.__modal__title}>{title}</p>
                <div className={styles.__modal__content}>
                    {content}
                </div>
                <div className={styles.__modal__btns}>
                    <span className={styles.__modal__btns__certain} onClick={close}>{certainText}</span>
                    <span className={styles.__modal__btns__cancel} onClick={close}>{cancelText}</span>
                </div>
            </div>

        </div>
    )
}

interface modalConfig{
    title?:string,
    content: string,
    certainText?: string,
    cancelText?: string,
    callback?:Function
}
//func service
const createModal = () => {
    //javascript
    let modalNode:any;
    if (document.querySelector('.__modal__')) {
        modalNode = document.querySelector('.__modal__')
    } else {
        modalNode = document.createElement('div')
        modalNode.className = "__modal__"

        document.body.appendChild(modalNode)
    }

    return {
        open(config:modalConfig) {
            ReactDOM.render(<Modal {...config} close={this.close} />, modalNode)
        },
        close() {
            ReactDOM.unmountComponentAtNode(modalNode)
        }
    }
}


export default createModal
