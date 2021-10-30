import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const TourList = () => {
  const [bookingLists, setBookingLists] = useState([]);
  // const [isDeleted, setIsDeleted] = useState(false);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`http://localhost:5000/myBookingList/${user.email}`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setBookingLists(result);
      });
  }, [user.email]);

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
            const remainingData = bookingLists?.filter(
              (bookList) => bookList?._id !== id
            );
            setBookingLists(remainingData);
            alert('You Booking Deleted successfully');
          }
        });
    }
  };
  return (
    <div>
      <h3 className="fw-bold text-center text-success my-3">My tour List</h3>
      <h5 className="fw-bold text-center text-success my-3">
        Total planning: {bookingLists.length}
      </h5>

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
          {bookingLists?.map((bookList, index) => (
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
                    onClick={() => handleCancelBooking(bookList?._id)}
                    className="btn bg-danger p-2"
                  >
                    Cancel
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

export default TourList;
