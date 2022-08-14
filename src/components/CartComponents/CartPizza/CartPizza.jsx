import { useState } from 'react';
import { MinusCircleOutlined, PlusCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
import {Button} from 'antd'
import { deleteCartPizza, editPizzaCount } from '../../../store/cartSlice/cartslice';
import { useDispatch } from 'react-redux';
import CartPizzaLoading from './CartPizzaLoading/CartPizzaLoading'
import './cartPizza.scss'

const CartPizza = ({ prev, cartPizzaLoading }) => {
    const { id, pizzaCount, pizzaImg, pizzaPrice, pizzaSize, pizzaTypeName, pizzaName } = prev
    const [idLoading, setIdLoading] = useState(null);
    const dispatch = useDispatch()
    const deletePizza = (id) => {
        if(window.confirm("Siz bul pizzani sebetten oshirejaqsizba ?")){
            dispatch(deleteCartPizza(id))
            setIdLoading(id)
            return alert("oshti")
        }
        else{
            return alert("oshirilmedi")
        }
      
    }
    const countPizza = (obj) => {
        const updatedPizza = {
            ...prev,
            pizzaCount: pizzaCount + obj.counter
        }
        dispatch(editPizzaCount(updatedPizza))
    }

    return (
        <div className="cart_products">
            {
                idLoading === id && cartPizzaLoading ? (<CartPizzaLoading />) : (
                    <div className="cart_products__inner">
                        <div className="cart_products__inner_info">
                            <img src={pizzaImg} alt="pizza suwreti" />
                            <div className="cart_products__inner_name">
                                <h2> {pizzaName} </h2>
                                <div className='cart_products__inner_name_type'>
                                    <span> {pizzaTypeName} ,  </span>
                                    <span>  {pizzaSize} см </span>
                                </div>
                            </div>
                        </div>
                        <div className="cart_products__inner_count">
                          <Button className='circle' disabled = {pizzaCount===1} onClick={() => countPizza({ counter: -1, prev })} icon={<MinusCircleOutlined  />}>   </Button> 
                            <div className='pizza-count' > {pizzaCount} </div>
                            <Button className='circle' onClick={() => countPizza({ counter: 1, prev })}   icon={<PlusCircleOutlined  />}>   </Button> 
                        </div>
                        <div className="cart_products__inner_price">
                            <span> {pizzaPrice * pizzaCount} </span>
                        </div>
                        <div className="cart_products__inner_delete" onClick={() => deletePizza(id)} >
                            <CloseCircleOutlined />
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default CartPizza