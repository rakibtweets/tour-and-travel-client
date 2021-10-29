import React, { useEffect, useState } from 'react';
import './Destination.css';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';

const Destination = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch('/travelDestination.json')
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <div>
      <h2 className=" text-center my-4">Explore Tour by Destination</h2>

      <Container>
        <Row xs={1} md={3} lg={3} className=" g-3">
          {destinations.map((destination) => (
            <Col key={destination?.PlaceName}>
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
                <Card.Body className=" destination-body">
                  <h3 className="text-primary fw-bloder">
                    {destination?.PlaceName}
                  </h3>
                  <p className=" text-secondary">
                    {destination?.placeDescription.slice(0, 150)}
                  </p>
                  <div className=" d-flex justify-content-between text-secondary fw-bold">
                    <h5>{destination?.travelDuration}</h5>
                    <h4>{destination?.pricing}</h4>
                  </div>
                </Card.Body>
                <Button className=" destination-body" variant="primary">
                  Buy Now
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Destination;
