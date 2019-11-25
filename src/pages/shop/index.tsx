import React from 'react'
import Uploader from '@/components/uploader'
import createModal from '@/components/modal'
import createActionsheet from '@/components/actionsheet'
const SetPage = ()=>{
    let modalInstance = createModal()
    let actionSheet = createActionsheet()
    return (
        <div>
            <h1>(shop set)</h1>
            <Uploader url="/api/upload?store_id=dc7cc2c9ec84051294bdc6cca8bd82a1" callback={(data:any)=>{console.log(data)}} text="上传logo" width={100} height={100}/>
            <Uploader url="/api/upload?store_id=dc7cc2c9ec84051294bdc6cca8bd82a1" callback={()=>{}} text="上传banner"/>
            <Uploader url="/api/upload?store_id=dc7cc2c9ec84051294bdc6cca8bd82a1" callback={()=>{}}/>

            <button onClick={()=>{modalInstance.open({content:"just for test!!!"})}}>test modal</button>
            <button onClick={
                ()=>{
                    actionSheet.open({
                        list:[{name:'0:00'},{name:'1:00'},{name:'2:00'}],
                        callback(selected:any){
                            console.log(selected)
                        }
                    })
                }
            }>下拉菜单</button>
        </div>
    )
}

export default SetPage
