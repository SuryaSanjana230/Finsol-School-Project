import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'bootstrap/dist/css/bootstrap.css';

export const Testimonial=()=>{
  return(
<>
<section>
<div className="heading">What Our Parents Say?</div>
<div className="container">
<Carousel  showThumbs={false}  autoPlay 
              interval={3000} showStatus={false}
              infiniteLoop className="border">
              <div>
  <div className="conatiner">
  <div className="row">
  <div className="col-md-2">
      <img src="./images/testimonial1.jpg" alt="" className="testimonialimg"/>
  </div>
 
  <div className="col-md-8">
  
  

<p className="testimonialtext"><div><span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span></div>“Our experience with Oasis School has been nothing short of exceptional. From the moment our children started attending, we noticed a remarkable transformation in their enthusiasm for learning and personal growth.”<div><b>Shriya.k</b></div>A Parent<div></div></p>

    </div>
  </div>
  </div>
              </div>
              <div>
              <div className="conatiner">
  <div className="row">
  <div className="col-md-2">
      <img src="./images/testimonial2.jpg" alt="" className="testimonialimg"/>
  </div>
 
  <div className="col-md-8">

<p className="testimonialtext"><div><span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span></div> "As a parent, I couldn’t be happier with Oasis School. The communication between the school and parents is excellent, and I always feel informed about my child’s progress. The school’s focus on both academics and personal growth means my child is thriving in all areas."<div><b>Vaishnavi</b></div>A Working Parent<div></div></p>

    </div>
  </div>
  </div>
            
            
              </div>
              <div>
              <div className="conatiner">
  <div className="row">
  <div className="col-md-2">
      <img src="./images/testimonial3.jpg" alt="" className="testimonialimg"/>
  </div>
 
  <div className="col-md-8">

<p className="testimonialtext"><div><span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span></div>"Oasis School has been a game-changer for our family. Our daughter was struggling at her previous school, but here, she has blossomed both academically and socially. The college counseling services are top-notch and have really helped us navigate the complex college application process."<div><b>Ramya</b></div>A Parent<div></div></p>

    </div>
  </div>
  </div>
              </div>
            </Carousel>
            </div>
            </section>
            
</>
  );
}