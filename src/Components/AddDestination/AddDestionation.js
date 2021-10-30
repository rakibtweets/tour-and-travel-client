import React from 'react';
import { useForm } from 'react-hook-form';
import './AddDestination.css';

const AddDestionation = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    fetch('http://localhost:5000/destinations', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert('Data inserted Successfully');
          reset();
        }
      });
  };
  return (
    <div className=" container-fluid  add-destination pb-5">
      <div className="py-4 container mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-75 mx-auto px-3 px-lg-5 bg-dark p-4"
        >
          <h2 className=" text-center text-white py-2 fw-bold">
            Add Destination
          </h2>
          <input
            className=" form-control "
            placeholder="Destination"
            {...register('placeName', { required: true })}
          />
          <br />
          <input
            className=" form-control "
            placeholder="Country Name"
            {...register('country', { required: true })}
          />
          <br />
          <input
            type="number"
            className=" form-control "
            placeholder="Days Stay"
            {...register('travelDuration', { required: true })}
          />
          <br />
          <input
            type="number"
            className=" form-control "
            placeholder="Package Price"
            {...register('pricing', { required: true })}
          />
          <br />
          <input
            className=" form-control "
            placeholder="Place Img Url"
            {...register('placeImg', { required: true })}
          />
          <br />
          <input
            className=" form-control "
            placeholder="Country Img Url"
            {...register('countryImg', { required: true })}
          />
          <br />
          <textarea
            className=" form-control "
            placeholder="Place Description"
            {...register('placeDescription', { required: true })}
          />
          <br />
          {errors.exampleRequired && <span>This field is required</span>}
          <br />
          <input
            className="btn btn-primary text-uppercase container-fluid px-5"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddDestionation;
