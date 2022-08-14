import { useState } from 'react';
import { Button, Image } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { showModal } from '../../../../../store/modalSlice/modalSlice';
import LogoPizza from '../../../../../assets/imgPizzaSItems/pizza.png'


const PizzaItem = ({ el }) => {
  const dispatch = useDispatch()

  const showModalHandle = (id) => {
    dispatch(showModal(id))
  }


  return (
    <li
      key={el.id}
      className="pizzas_items_li"
    >
      <Image 
        src={el.imageUrl} />
      <h2>{el.name} </h2>
      <p className='desc_pizza' >{el.desc}</p>
      <div className="btns">
        <Button type="text" className="pizza_price">
          {el.price}
        </Button>
        <Button type="primary" className="btn_bron" onClick={() => showModalHandle(el.id)}>
          <PlusCircleFilled />
          Kóbirek
        </Button>
      </div>
    </li>
  );
};

export default PizzaItem;
