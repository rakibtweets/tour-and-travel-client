import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const TourDetails = () => {
  const [tourDetails, setTourDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://chilling-zombie-71515.herokuapp.com/destinations/${id}`)
      .then((res) => res.json())
      .then((data) => setTourDetails(data));
  }, [id]);
  return (
    <div>
      <h2 className=" fw-bold text-success text-center my-3">Tour Details</h2>
      <div className="single-tour-detaisl container">
        <Row>
          <Col xs={12} lg={6}>
            <Fade left>
              <div className="destination-img pb-3">
                <img className="img-fluid" src={tourDetails.placeImg} alt="" />
              </div>
            </Fade>
          </Col>

          <Col xs={12} lg={6}>
            <Fade right>
              <div className="destination-info">
                <h5> Destination: {tourDetails?.placeName}</h5>
                <p>Travel Duration: {tourDetails?.travelDuration} days</p>
                <p className=" fw-bold">
                  Total Costing: $ {tourDetails?.pricing}
                </p>
                <div className="shor-description">
                  <h5>About: {tourDetails?.placeName}</h5>
                  <p>{tourDetails.placeDescription}</p>
                </div>
              </div>
              <Link to={`/booking/${id}`}>
                <Button className=" destination-body" variant="outline-success">
                  Book Now
                </Button>
              </Link>
            </Fade>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TourDetails;
