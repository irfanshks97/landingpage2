import React from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Section.css";
import Form from "../Form/Form";

export default function Section() {
  return (
    <div className="container-fluid p-md-4 p-2">
      <div className="row justify-content-center p-5">
        <div className="col-md-7 p-4 order-md-1 order-2">
          <h1 className="title">
            Improve your team's mobile productivity with Office 365
          </h1>
          <div className="d-flex">
            <p className="me-2">Share:</p>
            <ul className="list-unstyled d-flex">
              <li className="me-2 anchor-tag">
                <a href="http://www.facebook.com">
                  <FaFacebookF />
                </a>
              </li>
              <li className="me-2 anchor-tag">
                <a href="http://www.twitter.com">
                  <FaTwitter />
                </a>
              </li>
              <li className="anchor-tag">
                <a href="http://www.linkedin.com">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
          <p className="pt-5">
            Freedom to work on the go has become the standard for businesses of
            all sizes. And the first step is to provide the proper tools for
            this new working style.
          </p>
          <p>
            Office 365 and its cloud-based tools provide the proper support for
            mobile workers so they can access data securely and collaborate -
            regardless of location.
          </p>
          <p>
            Discover how easy it is to mobilize, improve, and do more for your
            small business when you download the free eBook:
          </p>
          <ul>
            <li>
              Anytime, anywhere - Learn more about how a mobile employee's
              working style leads to less stress and increased productivity.
            </li>
            <br />
            <li>
              Safety first - Learn about moving to cloud storage and how it can
              lift the burden of securing your data from your shoulders.
            </li>{" "}
            <br />
            <li>
              Teamwork makes the dream work - Read more about syncing your
              information so your team's devices can enable them to stay agile
              and responsive.
            </li>
          </ul>
        </div>
        <div className="col-md-5 order-md-2 order-1">
          <Form />
        </div>
      </div>
    </div>
  );
}
