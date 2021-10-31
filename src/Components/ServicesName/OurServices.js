import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaPlane, FaHotel } from 'react-icons/fa';
import './OurServices.css';
import { GiSailboat } from 'react-icons/gi';
import { SiBookstack } from 'react-icons/si';
import Fade from 'react-reveal/Fade';

const OurServices = () => {
  return (
    <div className="mb-5">
      <h2 className=" fw-bold text-center mt-5 mb-5">
        Our <span className="text-success">Services</span>
      </h2>
      <Container>
        <Row xs={1} md={2} lg={4} className="g-4">
          <Fade left>
            <Col className="d-block d-lg-flex">
              <div className="card text-center">
                <div className="card-icon mt-3">
                  <FaPlane size="5.5em" className="icon text-primary p-3" />
                </div>
                <div className="card-body service-info">
                  <h5>Air Ticketing</h5>
                  <p className="text-secondary small">
                    We provie you first class Air Ticketing and all the nessarry
                    information,that you to travel comfortably
                  </p>
                </div>
              </div>
            </Col>
            <Col className="d-block d-lg-flex">
              <div className="card text-center">
                <div className="card-icon mt-3">
                  <GiSailboat size="5.5em" className="icon text-primary p-3" />
                </div>
                <div className="card-body service-info">
                  <h5>Sea Explorations</h5>
                  <p className="text-secondary small">
                    We will give oportunities to see the beautful view of see,
                    We promise you a rememberable journey on the sea
                    Explorations
                  </p>
                </div>
              </div>
            </Col>
          </Fade>
          <Fade right>
            <Col className="d-block d-lg-flex">
              <div className="card text-center">
                <div className="card-icon mt-3">
                  <FaHotel size="5.5em" className="icon text-primary p-3" />
                </div>
                <div className="card-body service-info">
                  <h5>Hotel Accomodations</h5>
                  <p className="text-secondary small">
                    We provide you all the neccessary accomodation you need in
                    our hotel, As we care we provide good quality services
                  </p>
                </div>
              </div>
            </Col>
            <Col className="d-block d-lg-flex">
              <div className="card text-center">
                <div className="card-icon mt-3">
                  <SiBookstack size="5.5em" className="icon text-primary p-3" />
                </div>
                <div className="card-body service-info">
                  <h5>Tour Packages</h5>
                  <p className="text-secondary small">
                    We provide defferent type of tour packages so that you can
                    choose your travel plan with us, We ensure you good quality
                    servies
                  </p>
                </div>
              </div>
            </Col>
          </Fade>
        </Row>
      </Container>
    </div>
  );
};

export default OurServices;
