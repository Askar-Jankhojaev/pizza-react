import React from 'react'
import { Skeleton}  from 'antd'
import './modalLoading.scss'

const ModalLoading = () => {
  return (
    <div className="loading_inner">
        <Skeleton.Image  style={{
            width:300,
            height:300
        }}  className='loading_inner_image' />
        <Skeleton />
    </div>
  )
}

export default ModalLoading