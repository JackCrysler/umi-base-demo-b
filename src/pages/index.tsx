import React from 'react';
import styles from './index.css';
import createModal from '@/components/modal'
import Redirect from 'umi/redirect'
export default function() {
  return <Redirect to="/home" />
  let modal = createModal()
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          <button onClick={()=>{modal.open({content:"提示信息。。。。。",callback:()=>{console.log('modal is closed')}})}}>test modal</button>
        </li>
      </ul>
    </div>
  )
}
