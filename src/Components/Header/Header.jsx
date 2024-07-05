import { TiVendorMicrosoft } from "react-icons/ti";
import "./Header.css";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
export const Header = () => {
  return (
    <header className="header text-center border-1 shadow w-100">
      <ul className="d-flex justify-content-around text-center list-unstyled mt-1 row">
        <li className="col-md-6">
          <a href="#" className="text-light">
            <span className="me-1 fs-5">
              <TiVendorMicrosoft />
            </span>
            Office
          </a>
        </li>
        <li className="col-md-6">
          <a href="#" className="text-light">
            <span className="pe-1 fs-5">
              <PiEnvelopeSimpleLight />
            </span>
            Contact Us
          </a>
        </li>
      </ul>
    </header>
  );
};
