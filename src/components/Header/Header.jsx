import Logo from "../../assets/logo/logo.png";
import { Button, Space } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InfoPizzaHook from "../../customHook/infoPizzaHook";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  const { allCount } = InfoPizzaHook()
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header-inner__logo">
            <Link to="/" className="logo-link">
              <img src={Logo} alt="Pizza-Logo" />
              <div className="logo-text">
                <h2>NÓKIS PIZZA</h2>
                <p>Álemdegi eń mazalı pizza</p>
              </div>
            </Link>
          </div>
          <div className="header-inner__right">

            <Space size={"middle"}>
              <NavLink to="/page-about">biz haqqımızda</NavLink>
              <Button
                className="cart-btn"
                type="primary"
                icon={<ShoppingCartOutlined />}
                size="large"
                onClick={() => navigate("/page-cart")}
              >
                Sebet:
                <span className="cart-btn-count"> {allCount} </span>
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
