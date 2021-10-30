import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/destinations')
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <>
      <Carousel loop>
        <Carousel.Item>
          <div className="slide-1 japan-tokyo  text-white">
            <div className=" d-flex flex-column align-items-start justify-content-center h-75 px-5">
              <h1 className="fw-bold display-3">Tokyo,Japan</h1>
              <p className=" fs-5">
                Tokyo, night outing the city never sleeps{' '}
              </p>
              <div className="d-flex gap-4">
                <button className=" btn btn-warning px-4 py-2  rounded-pill">
                  Want a Personal Tour
                </button>
                <button className="btn btn-outline-dark text-white fw-bold px-4 py-2 rounded-pill">
                  Choose Our Tours
                </button>
              </div>
            </div>
            <div className="all-countries row g-3 container mx-auto">
              {countries.map((country) => (
                <div className="col-2 d-flex flex-column gap-2 align-items-center">
                  <img
                    className=" w-25 img-fluid"
                    src={country?.countryImg}
                    alt=""
                  />
                  <h5>{country.country}</h5>
                </div>
              ))}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide-2  text-dark">
            <div className=" d-flex flex-column align-items-start justify-content-center h-75 px-5">
              <h1 className="fw-bold display-3">New Zealand</h1>
              <p className=" fs-5">Beautiful country to travel </p>
              <div className="d-flex gap-4">
                <button className=" btn btn-success px-4 py-2  rounded-pill">
                  Want a Personal Tour
                </button>
                <button className="btn btn-outline-dark text-white fw-bold px-4 py-2 rounded-pill">
                  Choose Our Tours
                </button>
              </div>
            </div>
            <div className="all-countries row g-3 container mx-auto">
              {countries.map((country) => (
                <div className="col-2 d-flex flex-column gap-2 align-items-center">
                  <img
                    className=" w-25 img-fluid"
                    src={country?.countryImg}
                    alt=""
                  />
                  <h5 className=" text-white">{country.country}</h5>
                </div>
              ))}
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide-3  text-white">
            <div className=" d-flex flex-column align-items-start justify-content-center h-75 px-5">
              <h1 className="fw-bold display-3">The Greate Outdoors Tour</h1>
              <p className=" fs-5">
                Life become beautiful when you travel with us
              </p>
              <div className="d-flex gap-4">
                <button className=" btn btn-warning text-white fw-bold px-4 py-2  rounded-pill">
                  Want a Personal Tour
                </button>
                <button className="btn btn-outline-dark text-white fw-bold px-4 py-2 rounded-pill">
                  Choose Our Tours
                </button>
              </div>
            </div>
            <div className="all-countries row g-3 container mx-auto">
              {countries.map((country) => (
                <div className="col-2 d-flex flex-column gap-2 align-items-center">
                  <img
                    className=" w-25 img-fluid"
                    src={country?.countryImg}
                    alt=""
                  />
                  <h5 className=" text-white">{country.country}</h5>
                </div>
              ))}
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;