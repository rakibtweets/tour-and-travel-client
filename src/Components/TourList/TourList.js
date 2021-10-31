import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';
import Fade from 'react-reveal/Fade';
import { FaTrash } from 'react-icons/fa';

const TourList = () => {
  const [bookingLists, setBookingLists] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://chilling-zombie-71515.herokuapp.com/myBookingList/${user.email}`
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setBookingLists(result);
      });
  }, [user.email]);

  const handleCancelBooking = (id) => {
    // confirmation alert
    swal({
      title: 'Are you sure?',
      text: 'Your Booking You will be deleted',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://chilling-zombie-71515.herokuapp.com/deleteMyBooking/${id}`,
          {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json',
            },
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingData = bookingLists?.filter(
                (bookList) => bookList?._id !== id
              );
              setBookingLists(remainingData);
              swal('Deleted Successfully!', 'Your booking canceld', 'success');
            }
          });
      }
    });
  };
  return (
    <div className="mb-5">
      <h2 className="fw-bold text-center text-success mt-3 mb-3">
        My Tour List
      </h2>
      <h4 className="fw-bold text-center text-success my-3">
        Total planning: {bookingLists.length}
      </h4>

      <Container>
        <Table striped bordered hover responsive variant="light">
          <thead className="text-center">
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
              <Fade left cascade>
                <tr>
                  <td>{index + 1}</td>
                  <td>{bookList?.travelerName}</td>
                  <td>{bookList?.email}</td>
                  <td>{bookList?.address}</td>
                  <td>{bookList?.bookingDate}</td>
                  <td>{bookList?.packeInfo.placeName}</td>
                  <td className=" fw-bold">$ {bookList?.packeInfo.pricing}</td>
                  <td className=" d-flex justify-content-between align-items-center gap-3">
                    <p
                      className={
                        bookList?.status === 'Pending'
                          ? 'text-danger'
                          : 'text-success fw-bold'
                      }
                    >
                      {bookList?.status}
                    </p>
                    <button
                      onClick={() => handleCancelBooking(bookList?._id)}
                      className="btn bg-danger py-2 px-3 text-white fw-bold "
                      title="Delete"
                    >
                      <FaTrash size="1em" />
                    </button>
                  </td>
                </tr>
              </Fade>
            </tbody>
          ))}
        </Table>
      </Container>
    </div>
  );
};

export default TourList;
