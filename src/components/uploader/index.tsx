import React,{useState, createRef} from 'react'
import styles from './index.css'
import ReactDOM from "react-dom";
import request from '@/utils'
// hook
// 上传图片中心展示样式组件
const UploaderLogo = (props:any)=>{
    
    return (
        <div className={styles['uploader-wrap']}>
            <div className={styles.cross}>
                <div className={styles['h-line']}></div>
                <div className={styles['v-line']}></div>
            </div>
            <p className={styles['text']}>{props.children}</p>
        </div>
    )
}
// 上传图片核心功能组件
const Uploader = (props:any)=>{
    let {text="上传图片", url, callback,width,height} = props
    let [imgUrl, setImgUrl] = useState('')
    let labelDom:any = createRef()
    // 文件读取api
    let fr = new FileReader()
    fr.onload=(e:any)=>{
        setImgUrl(e.target.result)
    }
    let removeImg = (e:any)=>{
        // 阻止合成事件的冒泡
        e.stopPropagation();
        // 阻止与原生事件的冒泡
        e.nativeEvent.stopImmediatePropagation();
        
    }
    let getFile = (e:any)=>{

        fr.readAsDataURL(e.target.files[0])
        let fd = new FormData()

        fd.append('img', e.target.files[0])
        fetch(url, {
            // headers:{
            //     "Content-Type":"multipart/form-data"
            // },
            method:"POST",
            body: fd
        }).then(res=>res.json()).then(res=>{
            callback && callback(res)
        })
    }

    return (
        <span>
            <label className={styles.uploader} style={{width,height}} ref={labelDom}>
                {!imgUrl && <UploaderLogo>{text}</UploaderLogo>}
                <input className={styles.input} type="file" onChange={getFile}/>
                {!!imgUrl && <img src={imgUrl} alt="" className={styles.img} />}
            </label>
            {!!imgUrl && <span className={styles.close} onClick={removeImg}>X</span>}
        </span>
    )
}

export default Uploader
