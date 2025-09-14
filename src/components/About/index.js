
export const About=()=>{

  return(
   
    <>
  <section id="About" >
     <div className="container">
      <p className="aboutstyle1">About Us</p></div>

<img src="./images/homedesign.jpg" alt="" className="aboutdesign" />
<div className="aligncenter">
<div className="container">
<div className="row">

<div className="col-6 card" id="card1">


  <div className="card-body">
    <p className="card-text">
 <p className="aboutstyle2">Our Mission</p>
 <div className="aboutstyle3">Our mission at Oasis Preschool is to provide a nurturing, stimulating, and safe environment where children can explore, learn, and grow. We are committed to fostering each child's social, emotional, physical, and cognitive development through play-based and hands-on learning experiences. We aim to cultivate a love for learning, encourage creativity, and build a strong foundation for lifelong learning.</div>
 <div id="link">
 <a href="#more" className="card-link1">Read More</a></div>
      </p>
  </div>
</div>

<div className="col-6 card" id="card1" >
 
  <div className="card-body">
    <p className="card-text">
      <p className="aboutstyle2">Our Vision</p>
      <div className="aboutstyle3">Our vision at Oasis Preschool is to be a leading early childhood education center that inspires a passion for learning and discovery in young children. We strive to create an inclusive community where every child feels valued, respected, and supported. By partnering with families and the community, we envision a preschool where children thrive, reach their full potential</div>
      <div id="link">
      <a href="#more"className="card-link1" >Read More</a>
      </div>
      </p>
  </div>
  </div>
</div>
</div>

</div>
</section>

</>
  );
}