import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className="bg-dark text-white container-fluid text-white mt-5 p-5 sticky-bottom">
        <div className="footer-info row text-white">
          <div className="col-md-6 col-12 text-center text-lg-start">
            <h4 className="text-success fw-bold">Tour And Travel</h4>
            <h6>Do You Need Help With Anything?</h6>
            <p className="text-text-white">
              Receive updates of travel information during our service
            </p>
            <div className="input-group  w-75 mx-auto mx-lg-0 mb-5">
              <input
                className="form-control "
                type="text"
                placeholder="Email Address"
              />
              <button className="btn btn btn-primary">Subscribe</button>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-md-6 col-12 d-none d-lg-block d-flex justify-content-center align-items-center">
                <div className="links">
                  <p className="text-white fw-bold">Layout</p>
                  <div>
                    <Link className=" nav-link text-white" to="/home">
                      Home
                    </Link>
                    <Link className=" nav-link text-white" to="/contact">
                      Contact
                    </Link>
                    <Link className=" nav-link text-white" to="/destination">
                      Destination
                    </Link>
                    <Link className=" nav-link text-white" to="/addDestination">
                      Add Destination
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 d-flex justify-content-center align-items-center">
                <div className="all-service">
                  <div className="service-list">
                    <p className=" fw-bold">Speical Services</p>
                    <ul>
                      <li className=" text-white">Air Ticketing</li>
                      <li className=" text-white">Hotel Accomodation</li>
                      <li className=" text-white">Tour Packaging</li>
                      <li className=" text-white">Sea Exploring</li>
                      <li className=" text-white">Sports Advanture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copy-right text-center pt-3">
          <p>&copy; 2021 TourAndTravel. Designd By RakibHasan.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
