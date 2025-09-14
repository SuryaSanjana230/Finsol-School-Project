import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div className="container-fluid p-0" id="homecontainer">
        <div className="image-container">
          <img className="homeimg img-fluid" id="homeimg" src="./images/homeimage.jpg" alt="Home" />
          <div className="overlay">
            <div className="row position-relative m-0">
              <div className="col-md-6 text-white p-3" id="side">
                <span className="hometext1">Welcome to Oasis Preschool!</span>
                <div className="hometext2">Where Every Child's Journey Begins 
                  <div>with Joy and Discovery</div>
                </div>
              </div>
              <div className="col-md-6 text-white p-3">
                <div>At Oasis Preschool, we believe that every child</div>
                <div>is a unique individual with boundless potential.</div>
                <div>Our mission is to provide a nurturing and</div>
                <div>stimulating environment where children can</div>
                <div className="movedown">explore, learn, and grow.</div>
                <div>
                  <Link to="/contact">
                    <button className="btn btn-primary mt-2" id="buttonstyle1">Enquire Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

