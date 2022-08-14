import { useEffect, useState } from "react";
import { API } from "../../client";
import ModalLoading from "./ModalLoading/ModalLoading";
import ModalPizzaObj from "./ModalPizzaObj/ModalPizzaObj";
import { Modal } from "antd";
import "./modalPizza.scss";


const ModalPizza = ({ pizzaId, isModalVisible, handleCancel }) => {
  const [pizzaObj, setPizzaObj] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);



  const getPizzaId = async () => {
    try {
      setLoading(true);
      const response = await API.get(`/pizzas/${pizzaId}`);
      if (response.status === 200) {
        setLoading(false);
        setPizzaObj(response.data);
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (pizzaId) {
      getPizzaId();
    }
  }, [pizzaId]);



  return (
    <>
      <Modal
        title="NÓKIS PIZZA"
        visible={isModalVisible}
        onCancel={handleCancel}
        style={{
          textAlign: "center",
        }}

      >
        {loading && <ModalLoading />}
        {error && <h1> {error} </h1>}
        {pizzaObj && (
          <ModalPizzaObj pizzaObj={pizzaObj}  />
        )}
      </Modal>
    </>
  );
};

export default ModalPizza;
