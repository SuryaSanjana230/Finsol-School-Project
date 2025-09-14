import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export const Gallery =()=>{
  return(
<>

<p className="aboutstyle1">Discover the Joy of Learning at Oasis Preschool!</p>
<img src="./images/schooldesign.jpg" alt="" className="schooldesign"/>
<Carousel className="mainslide2"  autoPlay 
              interval={1000} showStatus={false}
              infiniteLoop showThumbs={false}>
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col">
                <img src="./images/img1.jpg" alt="" height="300px" width="919px" />
                </div>
                </div>
                <div className="row" id="gallspace">
                    <div className="col">
                <img src="./images/img2.jpg" alt="" height="200px" width="300px" />
                </div>
                <div className="col">
                <img src="./images/img3.jpg" alt="" height="200px" width="300px" />
                </div>
                <div className="col">
                <img src="./images/img4.jpg" alt="" height="200px" width="300px" />
                </div>
                </div>
                <div className="row" id="gallspace">
                    <div className="col">
                <img src="./images/img5.jpg" alt="" height="200px" width="300px" />
                </div>
                <div className="col">
                <img src="./images/img6.jpg" alt="" height="200px" width="300px" />
                </div>
                <div className="col">
                <img src="./images/img7.jpg" alt="" height="200px" width="300px" />
                </div>
                </div>
                </div>
              </div>
              <div>
              <div className="container">
                  <div className="row">
                    <div className="col">
                <img src="./images/img1.jpg" alt="" height="300px" width="919px" />
                </div>
                </div>
                <div className="row" id="gallspace">
                    <div className="col">
                <img src="./images/img2.jpg" alt="" height="200px" width="300px" />
                </div>
                <div className="col">
                <img src="./images/img3.jpg" alt="" height="200px" width="300px" />
                </div>
                <div className="col">
                <img src="./images/img4.jpg" alt="" height="200px" width="300px" />
                </div>
                </div>
                <div className="row" id="gallspace">
                    <div className="col">
                <img src="./images/img5.jpg" alt="" height="200px" width="300px" />
                </div>
                <div className="col">
                <img src="./images/img6.jpg" alt="" height="200px" width="300px" />
                </div>
                <div className="col">
                <img src="./images/img7.jpg" alt="" height="200px" width="300px" />
                </div>
                </div>
                </div>
              </div>
             
              <div>
              <div className="container">
                  <div className="row">
                    <div className="col">
                <img src="./images/img1.jpg" alt="" height="300px" width="919px" />
                </div>
                </div>
                <div className="row" id="gallspace">
                    <div className="col">
                <img src="./images/img2.jpg" alt="" height="200px" width="300px" />
                </div>
                <div className="col">
                <img src="./images/img3.jpg" alt="" height="200px" width="300px" />
                </div>
                <div className="col">
                <img src="./images/img4.jpg" alt="" height="200px" width="300px" />
                </div>
                </div>
                <div className="row" id="gallspace">
                    <div className="col">
                <img src="./images/img5.jpg" alt="" height="200px" width="300px" />
                </div>
                <div className="col">
                <img src="./images/img6.jpg" alt="" height="200px" width="300px" />
                </div>
                <div className="col">
                <img src="./images/img7.jpg" alt="" height="200px" width="300px" />
                </div>
                </div>
                </div>
              </div>
            
            </Carousel>
</>
  );
}