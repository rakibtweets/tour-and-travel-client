import React, { useEffect, useState } from 'react';
import './Destination.css';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/destinations')
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <div>
      <h2 className=" text-center my-4">Explore Tour by Destination</h2>

      <Container>
        <Row xs={1} md={3} lg={3} className=" g-4">
          {destinations.map((destination) => (
            <Col key={destination?._id} className=" d-flex">
              <Card className="destination-card">
                <Card.Img
                  className=" img-fluid"
                  variant="top"
                  src={destination?.placeImg}
                />
                <img
                  className="country-img img-fluid text-end"
                  src={destination?.countryImg}
                  alt=""
                />

                <Card.Body className="body-card">
                  <h5 className="text-success fw-bloder">
                    {destination?.placeName}
                  </h5>
                  <p className=" text-secondary p-0">
                    {destination?.placeDescription.slice(0, 120)}
                  </p>
                  <div className=" d-flex justify-content-between text-success fw-bold">
                    <h5>{destination?.travelDuration} days</h5>
                    <h5>$ {destination?.pricing}</h5>
                  </div>
                </Card.Body>
                <div className="d-flex justify-content-around body-card">
                  <Link to={`/destinations/${destination?._id}`}>
                    <Button className=" destination-body" variant="success">
                      Details
                    </Button>
                  </Link>
                  <Link to={`/booking/${destination?._id}`}>
                    <Button
                      className=" destination-body"
                      variant="outline-success"
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Destination;
