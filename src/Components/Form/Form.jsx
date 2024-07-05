import React from "react";
import form_image from "../../assets/images/form_image.jpg";
import { ImTwitter } from "react-icons/im";
import { BiLogoFacebook } from "react-icons/bi";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import "./Form.css";
export default function Form() {
  return (
    <>
      <form className="form shadow">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5">
              <img
                className="shadow"
                src={form_image}
                alt="Form_image"
                height="120px"
              />
            </div>
            <div className="col-7">
              <div>
                <h5 className="text-light card-title">
                  Fill out the form to get your free copy of "Mobilize Your
                  Business" eBook now
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 form-body">
          <p className="para text-center p-1">
            Autofill this form by signing into your social network:
          </p>
          <div className="d-flex justify-content-center">
            <div className="d-flex align-items-center border me-2 facebook_div">
              <a href="#" className="text-decoration-none text-dark">
                <BiLogoFacebook size="30" className="me-2 facebook" />
                <span className="facebook-span">Facebook</span>
              </a>
            </div>
            <div className="d-flex align-items-center border facebook_div">
              <a href="#" className="text-decoration-none text-dark">
                <ImTwitter size="30" className="twitter me-2" />
                <span className="facebook-span">Twitter</span>
              </a>
            </div>
          </div>
          <hr className="w-100" />
          <div className="form-group w-100">
            <label>First name</label>
            <input className="" type="text" />
          </div>
          <div className="form-groupw-100">
            <label>Last name</label>
            <input className="" type="text" />
          </div>
          <div className="form-group w-100">
            <label>Business email</label>
            <input className="" type="email" />
          </div>
          <div className="form-group w-100">
            <label>Company name</label>
            <input className="" type="text" />
          </div>
          <div className="form-group w-100">
            <label>Company size</label>
            <select
              className="w-100"
              style={{
                fontSize: "12px",
                padding: "3px",
              }}
            >
              <option value="">Select...</option>
              <option value="1">India</option>
              <option value="2">Australia</option>
              <option value="3">England</option>
              <option value="">Pakistan</option>
              <option value="Nepal">Nepal</option>
              <option value="Afganistan">Afganistan</option>
              <option value="Newzland">Newzland</option>
              <option value="Dubai">Dubai</option>
            </select>
          </div>
          <div className="form-group w-100">
            <label>Country</label>
            <select
              className="w-100"
              style={{
                fontSize: "12px",
                padding: "3px",
              }}
            >
              <option value="">Select Country...</option>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="England">England</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Nepal">Nepal</option>
              <option value="Afganistan">Afganistan</option>
              <option value="Newzland">Newzland</option>
              <option value="Dubai">Dubai</option>
            </select>
          </div>
          <div className="mt-3 w-100">
            <button className="form-button shadow w-100 d-flex">
              <span className="ms-2">Get the free eBook</span>
              <IoArrowForwardCircleOutline className="arrow" />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
