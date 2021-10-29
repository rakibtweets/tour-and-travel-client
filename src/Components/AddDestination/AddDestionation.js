import React from 'react';
import { useForm } from 'react-hook-form';

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
    <div className=" container mx-auto">
      <h2 className=" text-center text-primary my-3 fw-bold">
        Add Destination
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className=" w-50 mx-auto">
        <input
          className=" form-control"
          placeholder="Destination"
          {...register('placeName', { required: true })}
        />
        <br />
        <input
          className=" form-control"
          placeholder="Country Name"
          {...register('country', { required: true })}
        />
        <br />
        <input
          type="number"
          className=" form-control"
          placeholder="Days Stay"
          {...register('travelDuration', { required: true })}
        />
        <br />
        <input
          type="date"
          className=" form-control"
          placeholder="Date"
          {...register('bookingDate', { required: true })}
        />
        <br />
        <input
          type="number"
          className=" form-control"
          placeholder="Package Price"
          {...register('pricing', { required: true })}
        />
        <br />
        <input
          className=" form-control"
          placeholder="Place Img Url"
          {...register('placeImg', { required: true })}
        />
        <br />
        <input
          className=" form-control"
          placeholder="Country Img Url"
          {...register('countryImg', { required: true })}
        />
        <br />
        <textarea
          className=" form-control"
          placeholder="Place Description"
          {...register('placeDescription', { required: true })}
        />
        <br />

        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="btn btn-primary" type="submit" />
      </form>
    </div>
  );
};

export default AddDestionation;
