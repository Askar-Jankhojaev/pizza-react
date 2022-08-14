import { HomeHeader, HomePizzas } from "../../components/HomeComponents";
import { useSelector, useDispatch } from "react-redux";
import ErrorPage from "../ErrorPage/ErrorPage";
import ModalPizza from '../../components/ModalPizza/ModalPizza'
import { hideModal } from '../../store/modalSlice/modalSlice.js'
import "./homePage.scss";
const HomePage = () => {
  const dispatch = useDispatch()

  const { productsError } = useSelector((state) => state.productsSlice);
  const { visible, pizzaId } = useSelector((state) => state.modalSlice);

  const handleCancel = () => {
    dispatch(hideModal())
  }


  if (productsError) {
    return <ErrorPage />;
  }
  return (
    <section className="section-home">
      <div className="container">
        <HomeHeader />
        <HomePizzas />
        <ModalPizza
          isModalVisible={visible}
          handleCancel={handleCancel}
          pizzaId={pizzaId}
        />
      </div>
    </section>
  );
};

export default HomePage;
