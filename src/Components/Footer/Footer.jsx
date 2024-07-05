import { ImFacebook, ImInstagram } from "react-icons/im";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import React from "react";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="row d-flex align-items-end footer-row">
        <div className="col-sm-6">
          <ul className="d-flex align-items-end links">
            <li className="me-2">
              <a href="" className="text-decoration-none text-dark">
                Follow us
              </a>
            </li>
            <li className="me-2">
              <a href="" className="text-dark">
                <ImInstagram />
              </a>
            </li>
            <li className="imagetag me-2">
              <a href="">
                <img src="image" />
              </a>
            </li>
            <li className="me-2">
              <a href="www.facebook.com">
                <ImFacebook className="facebooklogo" />
              </a>
            </li>
            <li className="me-2">
              <a className="link" href="www.microsoft.com">
                <img src={logo} width="85px" height="19px" alt="Logo" />
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-6">
          <ul className="copyright-link">
            <li>
              <a>Microsoft</a>
            </li>
            <li className="copyright">
              <a>&copy; 2017 Microsoft</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
