import React from "react";
import PizzaItem from './PizzaItem/PizzaItem'
import "./pizzaBlock.scss";

const PizzasBlock = ({ products }) => {
  return (
    <div className="pizzas-block">
      {products.map((el) => (
        <PizzaItem el={el} key={el.id} />
      ))}
    </div>
  );
};

export default PizzasBlock;
