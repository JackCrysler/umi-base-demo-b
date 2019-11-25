import React, { Children, useEffect } from 'react';
import styles from './index.css';
import Cookies from 'js-cookie'
import Redirect from 'umi/redirect'
import router from 'umi/router'
import withRouter from 'umi/withRouter';

const BasicLayout: React.FC = (props:any) => {
  
  useEffect(()=>{
    let {location} = props
    if(location.pathname !== '/login' || location.pathname !== '/regiter'){
      if(!Cookies.get('token')){
        router.push('/login')
      }
    }
  })
  return props.children
  // return (
  //   <div className={styles.normal}>
  //     { props.children }
  //   </div>
  // )
}

export default withRouter(BasicLayout);
