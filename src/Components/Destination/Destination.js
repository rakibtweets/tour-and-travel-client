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
        <Row xs={1} md={3} lg={3} className=" g-3">
          {destinations.map((destination) => (
            <Col key={destination?._id}>
              <Card className="destination-card">
                <Card.Img
                  className=" img-fluid"
                  variant="top"
                  src={destination?.placeImg}
                />
                <img
                  className="w-25 country-img img-fluid"
                  src={destination?.countryImg}
                  alt=""
                />
                <Card.Body className="">
                  <h3 className="text-primary fw-bloder">
                    {destination?.placeName}
                  </h3>
                  <p className=" text-secondary">
                    {destination?.placeDescription.slice(0, 120)}
                  </p>
                  <div className=" d-flex justify-content-between text-secondary fw-bold">
                    <h5>{destination?.travelDuration} days</h5>
                    <h5>$ {destination?.pricing}</h5>
                  </div>
                </Card.Body>
                <div className="d-flex justify-content-around my-3">
                  <Link to={`/destinations/${destination?._id}`}>
                    <Button className=" destination-body" variant="success">
                      Details
                    </Button>
                  </Link>
                  <Link to="/booking">
                    <Button
                      className=" destination-body"
                      variant="outline-primary"
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
