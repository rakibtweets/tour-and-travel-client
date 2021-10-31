import React from 'react';
import './TravelBlogs.css';
import Fade from 'react-reveal/Fade';

const TravelBlogs = () => {
  return (
    <div className="travel-blog-container">
      <Fade bottom cascade>
        <div className="travel-headers text-center bg-black text-white p-4">
          <p className="text-warning fw-bold">Blogs</p>
          <h2 className=" fw-bold display-6 ">Travel articles</h2>
          <p className="w-75 mx-auto">
            We have some awesome travel blogs and amazing content, Please go
            through our travel blogs. Their are also amazing travel blogs
            comming.We share all our travelling blog in our website,You could
            find all the neccessary information in our travel articles
          </p>
        </div>
      </Fade>
      <div className="blogs-body p-4">
        <div className="container text-center">
          <div className="row row-cols-lg-2 row-cols-1 g-5">
            <Fade left>
              <div className="col ">
                <div>
                  <img
                    className="img-fluid"
                    src="https://lavella.hellodigi.ru/img/prevblog1.jpg"
                    alt=""
                  />
                </div>
                <article className=" text-center py-3 text-white">
                  <h4 className="fw-bold">Worlds Beautiful Treasure</h4>
                  <p>
                    This is one of the beautiful place in the world, World has
                    its natural beaultiful of its on.A wonderful serenity has
                    taken possession of my entire soul, like these sweet
                    mornings of spring which I enjoy with my whole heart. I am
                    alone, and feel the charm of existence in this spot, which
                    was createdfor the bliss of souls like mine.
                  </p>
                </article>
              </div>
            </Fade>
            <Fade right>
              <div className="col">
                <div>
                  <img
                    className="img-fluid"
                    src="https://lavella.hellodigi.ru/img/prevblog2.jpg"
                    alt=""
                  />
                </div>
                <article className=" text-center py-3 text-white">
                  <h4>Beautiful River Rock And Water</h4>
                  <p>
                    This is one of the beautiful place in the world, World has
                    its natural beaulti of its on.A wonderful serenity has taken
                    possession of my entire soul, like these sweet mornings of
                    spring which I enjoy with my whole heart. I am alone, and
                    feel the charm of existence in this spot, which was
                    createdfor the bliss of souls like mine.
                  </p>
                </article>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <button className="btn btn-outline-warning text-white px-4 py-2 rounded-pill">
              View All Articles
            </button>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default TravelBlogs;
