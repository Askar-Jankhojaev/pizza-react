import { useState } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { postPizza, editPizzaCount } from '../../../store/cartSlice/cartslice'
import { hideModal} from '../../../store/modalSlice/modalSlice'

const ModalPizzaObj = ({ pizzaObj }) => {
  let sanagish = 0;
  const dispatch = useDispatch()
  const [pizzaSizeIndex, setPizzaSizeIndex] = useState(1)
  const [pizzaShowBtnTypes, setPizzaShowBtnTypes] = useState(0)
  const { cartProducts } = useSelector((state) => state.cartProductsSlice);
  const obClickSizeBtn = (ind) => {
    setPizzaSizeIndex(ind)
    if (ind === 0) {
      setPizzaShowBtnTypes(0)
    }
  }

  const obClickTypesBtn = (index) => {
    setPizzaShowBtnTypes(index)
  }
  const sebetClick = (pizzaObj) => {
    const newPizza = {
      pizzaImg: pizzaObj.imageUrl,
      pizzaName: pizzaObj.name,
      pizzaSize: pizzaObj.sizes[pizzaSizeIndex].size,
      pizzaPrice: pizzaObj.sizes[pizzaSizeIndex].price,
      pizzaTypeName: pizzaObj.sizes[pizzaSizeIndex].type[pizzaShowBtnTypes].typeName,
      pizzaCount: 1
    }
      const findElement = cartProducts.find(el => el.pizzaName===newPizza.pizzaName && el.pizzaTypeName===newPizza.pizzaTypeName && el.pizzaSize===newPizza.pizzaSize )
     if(findElement){
       dispatch(editPizzaCount({...findElement, pizzaCount : findElement.pizzaCount+1}))
     }
     else{
      dispatch(postPizza(newPizza))

     }
     
      dispatch(hideModal())
  }

  return (
    <div className="modal_inner">
      <div className="modal_inner_img">
        <img src={pizzaObj.imageUrl} className={
          classNames("img", {
            img_0: pizzaSizeIndex == 0,
            img_1: pizzaSizeIndex == 1,
            img_2: pizzaSizeIndex == 2
          })
        } alt='pizzaImage' />
      </div>
      <div className="modal_inner_name">
        <div className="pizza_info">
          <div className="pizza_info__name">
            <h1> {pizzaObj.name} </h1>
            <p> {pizzaObj.sizes[pizzaSizeIndex].size} см, {pizzaObj.sizes[pizzaSizeIndex].type[pizzaShowBtnTypes].typeName}   тесто </p>
          </div>

          <div className="pizza_info__desc">
            {pizzaObj.desc}
          </div>
          <div className="size-btns">
            {
              pizzaObj.sizes.map((prev, index) => (
                <button onClick={() => obClickSizeBtn(index)}
                  className={
                    classNames("size-btns-btn", { active: index === pizzaSizeIndex })}
                  key={prev.id} >{prev.sizeName}
                </button>
              ))
            }
          </div>
          <div className="type-btns">
            {
              pizzaObj.sizes[pizzaSizeIndex].type.map((prev, index) => (
                <button
                  className={
                    classNames("type-btns-btn", {
                      active: index == pizzaShowBtnTypes,
                      fal: !prev.isShow
                    })}
                  onClick={() => obClickTypesBtn(index)} >
                  {prev.typeName}
                </button>
              ))
            }
          </div>
          <div className="pizza_info__btn">
            <button onClick={() => sebetClick(pizzaObj)} >
              Sebetke qosiw :{pizzaObj.sizes[pizzaSizeIndex].price} </button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ModalPizzaObj;
