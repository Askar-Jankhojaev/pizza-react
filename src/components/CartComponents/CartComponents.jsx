import React from 'react'
import CartPizza from "../../components/CartComponents/CartPizza/CartPizza";
import { ShoppingCartOutlined, DeleteOutlined } from "@ant-design/icons";
import { deleteCartObshiy } from '../../store/cartSlice/cartslice'
import { useDispatch } from 'react-redux';
import InfoPizzaHook from '../../customHook/infoPizzaHook';
import CartSearch from './CartSearch/CartSearch';

const CartComponents = ({ cartProducts, cartProductsError, cartProductsLoading, cartPizzaLoading }) => {

  const { allCount, allPrice } = InfoPizzaHook()
  const dispatch = useDispatch()
  const deletePizzas = async () => {
    cartProducts.map(el => {
      dispatch(deleteCartObshiy(el.id))
    })
  }
  return (
    <div className="cart-block">
      <div className="cart-block__header">
        <div className="cart-block__header__left">
          <span>
            <ShoppingCartOutlined />
          </span>
          <h2>Sebet</h2>
        </div>
        <div className="cart-block__header__middle">
          <CartSearch />
        </div>
        <div className="cart-block__header__right" onClick={deletePizzas} >
          <DeleteOutlined />
          <p>Sebetti bosatiw</p>
        </div>
      </div>
      <div className="cart-block__body">
        {cartProducts.map(prev => <CartPizza
          prev={prev}
          key={prev.id}
          cartProductsError={cartProductsError}
          cartProductsLoading={cartProductsLoading}
          cartPizzaLoading={cartPizzaLoading}
        />)}
      </div>
      <div className="cart-block__footer">
        <h3>Uluwma Bahasi :  <span>{allPrice}</span> </h3>
        <button> Buyirtpa beriw </button>
      </div>
    </div>

  )
}

export default CartComponents