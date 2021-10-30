import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const ManageAllTours = () => {
  const [bookings, setBookings] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    fetch('http://localhost:5000/managleAllBooking')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, [isUpdated]);

  // handle Deleting bookings
  const handleCancelBooking = (id) => {
    const proceed = window.confirm('Are you sure, You want to delete?');
    if (proceed) {
      fetch(`http://localhost:5000/deleteMyBooking/${id}`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingData = bookings?.filter(
              (bookList) => bookList?._id !== id
            );
            setBookings(remainingData);
            alert('You Booking Deleted successfully');
          }
        });
    }
  };

  //handle Approve Booking
  const handleApproveBooking = (id) => {
    const updatedBooking = bookings.find((bookList) => bookList._id === id);
    // console.log('~ updatedBooking', (updatedBooking.status = 'Approved'));
    updatedBooking.status = 'Approved';

    fetch(`http://localhost:5000/managleAllBooking/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(updatedBooking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert('Your booking has been approved successfully');
          setIsUpdated(true);
        }
      });
  };
  return (
    <div>
      <h2 className="text-center fw-bold">Manage All Bookings</h2>
      <h2 className=" text-success text-center">
        {' '}
        Total Bookings: {bookings.length}
      </h2>
      <Container>
        <Table striped bordered hover responsive variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Booking Date</th>
              <th>Destination</th>
              <th>Cost</th>
              <th>Status</th>
            </tr>
          </thead>
          {bookings?.map((bookList, index) => (
            <tbody key={bookList?._id}>
              <tr>
                <td>{index + 1}</td>
                <td>{bookList?.travelerName}</td>
                <td>{bookList?.email}</td>
                <td>{bookList?.address}</td>
                <td>{bookList?.bookingDate}</td>
                <td>{bookList?.packeInfo.placeName}</td>
                <td>$ {bookList?.packeInfo.pricing}</td>
                <td className="text-danger">
                  {bookList?.status}{' '}
                  <button
                    onClick={() => handleApproveBooking(bookList?._id, index)}
                    className="btn btn-success p-2 text-white fw-bold"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleCancelBooking(bookList?._id)}
                    className="btn bg-danger py-2 px-3 text-white fw-bold"
                  >
                    x
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default ManageAllTours;
