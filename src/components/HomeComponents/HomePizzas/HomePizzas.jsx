import { useSelector } from "react-redux";
import SkeletonLoading from '../../SkeletonLoading/SkeletonLoading'
import PizzasBlock from './PizzaBlock/PizzaBlock'
import "./homePizzas.scss";

const HomePizzas = () => {

  const { products, productsLoading, queryString } = useSelector((state) => state.productsSlice);
  // console.log(products)
  // products.sort()
  if (productsLoading) return <SkeletonLoading />;

  return (
    <div className="home-pizzas">
      {products.length > 0 && <><h1 className="pizza-title"> {queryString.searchPizza ? queryString.searchPizza  : "Все пиццы" } </h1> <PizzasBlock products={products} /></>}
    </div>
  );
};

export default HomePizzas;
