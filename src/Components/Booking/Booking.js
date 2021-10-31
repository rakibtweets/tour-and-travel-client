import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';

const Booking = () => {
  const [tourDetails, setTourDetails] = useState({});
  const { user } = useAuth();
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/destinations/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTourDetails(data);
      });
  }, [id]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data['status'] = 'Pending';
    data.packeInfo = tourDetails;
    console.log(data);
    fetch(`http://localhost:5000/myBookingList/${user?.email}`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          swal('Congratulations!', 'Your Booking is confirmed', 'success');
          reset();
        }
      });
  };
  return (
    <div>
      <h3 className=" text-center text-success my-5">Booking</h3>
      <Container>
        <Row>
          <Col lg={6} className="destination-info">
            <div className="destination-img pb-3">
              <img className="img-fluid" src={tourDetails.placeImg} alt="" />
            </div>
            <div className="destination-info">
              <h5> Destination: {tourDetails?.placeName}</h5>
              <p>Travel Duration: {tourDetails?.travelDuration} days</p>
              <p className=" fw-bold">
                Total Costing: $ {tourDetails?.pricing}
              </p>
              <div className="shor-description">
                <h5>
                  {tourDetails?.placeName},{tourDetails?.country}
                </h5>
                <p>{tourDetails.placeDescription}</p>
              </div>
            </div>
          </Col>
          <Col lg={6} className="booking-form">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-dark p-4">
              <h4 className=" text-center text-white mb-3">Booking Form</h4>
              <input
                className=" form-control"
                defaultValue={user.displayName}
                readOnly
                {...register('travelerName')}
              />
              <br />
              <input
                type="text"
                className=" form-control"
                defaultValue={user.email}
                readOnly
                {...register('email')}
              />
              <br />
              {/* <input
                type="text"
                className=" form-control"
                defaultValue={tourDetails.placeName}
                readOnly
                {...register('placeName')}
              />
              <br /> */}

              <input
                type="text"
                className=" form-control"
                placeholder="Your Address"
                {...register('address', { required: true })}
              />
              <br />
              {errors.address && (
                <span className="text-danger">Address is required</span>
              )}
              <input
                type="number"
                className=" form-control"
                placeholder="Phone No."
                {...register('phone', { required: true })}
              />
              <br />
              {errors.phone && (
                <span className="text-danger">Phone No is required</span>
              )}
              <input
                type="date"
                className=" form-control"
                {...register('bookingDate', { required: true })}
              />

              <br />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booking;
