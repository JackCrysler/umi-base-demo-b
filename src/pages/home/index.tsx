import React from 'react'
import styles from './index.css'
import Link from 'umi/link'
let Home = ()=>{
    
    return (
        <div>
            <h1>home</h1>
            <div className={styles.cubics}>
                <span className={styles['cubics-item']}>接单</span>
                <span className={styles['cubics-item']}>扫码</span>
                <span className={styles['cubics-item']}>退款</span>
                <span className={styles['cubics-item']}><Link to={{pathname:"/shop"}}>店铺设置</Link></span>
                <span className={styles['cubics-item']}>分类管理</span>
                <span className={styles['cubics-item']}>添加商品</span>
                <span className={styles['cubics-item']}>商品列表</span>
                <span className={styles['cubics-item']}>收益报表</span>
            </div>
        </div>
    )
}

export default Home
