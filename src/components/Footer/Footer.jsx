import React from "react";
import "./footer.scss";
import { Button } from "antd";
import { InstagramFilled, T} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_inner">
          <div className="footer_inner_contact">
            <span>Bizdi social tarmaqlarda guzetip barin  </span>
            <a href="https://t.me/AskarJankhojaev">
              <Button type="text">
                <InstagramFilled />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
