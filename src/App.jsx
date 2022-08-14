import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Header, Footer } from "./components";
import { HomePage, AboutPage, CartPage } from "./pages";
import { getCartPizza } from './store/cartSlice/cartslice';
import { getPizza } from './store/productsSlice/productsSlice'
import {
  deletePizzaReducer,
  postPizzaReducer,
  editPizzaCountReducer
} from './store/cartSlice/cartslice'


const App = () => {
  const dispatch = useDispatch();

  const { queryString } = useSelector(state => state.productsSlice)
  const { queryStringCart } = useSelector(state => state.cartProductsSlice)

  useEffect(() => {
    dispatch(getPizza(queryString));
  }, [queryString.searchPizza, queryString.category])

  useEffect(() => {
    dispatch(getCartPizza(queryStringCart));
  }, [queryStringCart.searchPizza])

  useEffect(() => {
    deletePizzaReducer()
    postPizzaReducer()
    editPizzaCountReducer()
  }, []);

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/page-about" element={<AboutPage />} />
        <Route path="/page-cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
