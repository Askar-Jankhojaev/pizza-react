import { NavLink } from "react-router-dom";
import Logo from "../../../assets/imgCart/cartData.svg";
import './cartPustoy.scss'

const CartPustoy = () => {
  return (
    <div className="cart_inner">
          <div className="cart_inner_info">
            <div className="cart_inner_info_pustoy">
              <h1>Sebet Bos 😐 </h1>
              <p>
                Siz ele pitsa buyırtpa etpegensiz. Pitsa buyırtpa
                qılıw ushın tiykarǵı betke ótiń.
              </p>
              <img src={Logo} alt=" Magluwmat Tabilmadi" />
              <NavLink to={"/"}>
                <button className="btn_pustoy">Izge Qaytıw</button>
              </NavLink>
            </div>
          </div>
        </div>
  )
}

export default CartPustoy