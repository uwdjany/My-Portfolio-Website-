import React from "react";
import "./workstyle.css";

const Work = () => {
  return (
    <>
      <section id="work">
        <div classNameName="container">
          <div className="text-center pt-5">
          <h2>My Work</h2>
          
          </div>
          <div classNameName="row">
            <div classNameName="col-lg-4">
              <div>
                <img src="..." className="card-img-top" alt="..." />
                <div>
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div>
            <div classNameName="col-lg-4">
            <div>
              <img src="..." className="card-img-top" alt="..." />
              <div>
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make
                  up the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div classNameName="col-lg-4">
          <div>
            <img src="..." className="card-img-top" alt="..." />
            <div>
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make
                up the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
