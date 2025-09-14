import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.css';

export const Founder = () => {
  return (
    <>
    <section>
    
    <p className="aboutstyle5">About Our Founder</p>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Carousel className="mainslide"  autoPlay 
              interval={3000} 
              infiniteLoop showThumbs={false} showStatus={false}>
              <div>
                <img src="./images/person1.jpg" alt="" height="400px" width="600px" />
              </div>
              <div>
                <img src="./images/person2.jpg" alt="" height="400px" width="600px" />
              </div>
              <div>
                <img src="./images/person3.jpg" alt="" height="400px" width="600px" />
              </div>
            </Carousel>
          </div>
          <div className="col-md-6" id="lowertext">
 <p className="aboutstyle3">Oasis Preschool was founded with a vision to create a nurturing and stimulating environment where young minds can flourish. Our founders, Jane Smith and John Doe, are passionate educators with a combined experience of over 30 years in early childhood education. Their dedication to fostering a love of learning and their belief in the potential of every child is at the heart of our philosophy.</p>
 <p className="aboutstyle3">Jane believes in the importance of a holistic approach to education, where emotional and social development is given as much attention as academic growth.</p>
          </div>
        </div>
      </div>
      <p className="aboutstyle5">Meet Our Teachers</p>
      <div className="container">
<div className="row">
  <div className="col-md-6" id="teacherstext">
    <p className="aboutstyle3">At Oasis Preschool, our teachers are the cornerstone of our educational community. Each member of our teaching staff is carefully selected for their qualifications, experience, and passion for early childhood education. Our teachers are not only educators but also mentors and guides, dedicated to fostering a love of learning in every child.</p>
  <p className="aboutstyle3">Sarah believes in the power of play-based learning and incorporates a variety of interactive activities to stimulate cognitive and social development.</p>
  </div>
  <div className="col-md-6">
  <Carousel className="mainslide" showThumbs={false} showStatus={false}  autoPlay 
              interval={3000} 
              infiniteLoop>
              <div>
                <img src="./images/person4.jpg" alt="" height="400px" width="600px" />
              </div>
              <div>
                <img src="./images/person5.jpg" alt="" height="400px" width="600px" />
              </div>
              <div>
                <img src="./images/person6.jpg" alt="" height="400px" width="600px" />
              </div>
            </Carousel>
  </div>
</div>
</div>
<div className="aboutstyle5">Our History</div>
<div className="container">
<p className="aboutstyle3" id="marginleft">Oasis Preschool was established in 2010 by Jane Smith and John Doe, two passionate educators with a shared dream of creating a nurturing and innovative learning environment for young children. Their journey began with a simple yet profound vision: to provide a preschool experience that balances academic excellence with social and emotional development.</p>
</div>
</section>
  </>
  );
};

