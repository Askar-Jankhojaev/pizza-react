import React from 'react'
import { Skeleton } from 'antd'
import './cartPizzaLoading.scss'

const CartPizzaLoading = () => {
  return (
    <div className='loading-skeleton'>
        <Skeleton.Image />
        <Skeleton active />
    </div>
  )
}

export default CartPizzaLoading