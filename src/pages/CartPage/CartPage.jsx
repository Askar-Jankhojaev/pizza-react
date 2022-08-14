import { useSelector } from "react-redux";
import CartPustoy from "../../components/CartComponents/CartPustoy/CartPustoy";
import CartComponents from "../../components/CartComponents/CartComponents";
import "./cartPage.scss";

const CartPage = () => {

  const { cartProducts, cartProductsLoading, cartProductsError, cartPizzaLoading, cartPriceSumma } = useSelector((state) => state.cartProductsSlice);

  return (
    <section className="section-cart">
      <div className="container">
        {
          cartProducts.length > 0 ? <CartComponents
            cartProducts={cartProducts}
            cartProductsLoading={cartProductsLoading}
            cartProductsError={cartProductsError}
            cartPizzaLoading={cartPizzaLoading}
            cartPriceSumma={cartPriceSumma}
          /> : <CartPustoy />
        }
      </div>
    </section>

  );
};

export default CartPage;
