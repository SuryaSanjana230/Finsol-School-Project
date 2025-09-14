import React from 'react';


export const Admissions = () => {
  return (
    <>
      <section id="Admissions">
        <p className="aboutstyle1">Admissions</p>
        <p className="aboutstyle9">Enrollment process</p>

        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <p className="aboutstyle10">
                The enrollment process for Oasis Preschool typically involves several steps to ensure that both the child and the parents are a good fit for the school.
              </p>
              <ol className="aboutstyle10">
                <li>Enquiry</li>
                <li>Application</li>
                <li>Assessment</li>
                <li>Acceptance</li>
                <li>Confirmation</li>
              </ol>
            </div>
            <div className="col-md-4 col-sm-12 card" id="cardsize">
              <div className="card-body">
                <p className="card-text">
                  <p className="addcardhead">Deadlines</p>
                  <p><span className="violet">Last Date:</span> 30th MAY 2024</p>
                  <p><span className="violet">Fees Last Date: </span>30th APRIL 2024</p>
                  <p className="violet">Application Closing on 26th May 2024</p>
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <p className="aboutstyle6">Fees</p>
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 card" id="card3">
                <div className="card-body">
                  <p className="card-text">
                    <img src="./images/adddesign.jpg" alt="" className="adddesign" />
                    <p className="addcard1">Pre School</p>
                    <p className="addcard2">Only for children of age 2-3 years</p>
                    <p className="addcard3">Rs 1000 <span className="addcard4">/ per month</span></p>
                    <p className="addcard5">Billed Annually</p>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 card" id="card3">
                <div className="card-body">
                  <p className="card-text">
                    <img src="./images/adddesign.jpg" alt="" className="adddesign" />
                    <p className="addcard1">Pre Kindergarten</p>
                    <p className="addcard2">Only for children of age 3-4 years</p>
                    <p className="addcard3">Rs 2000 <span className="addcard4">/ per month</span></p>
                    <p className="addcard5">Billed Annually</p>
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12 card" id="card3">
                <div className="card-body">
                  <p className="card-text">
                    <img src="./images/adddesign.jpg" alt="" className="adddesign" />
                    <p className="addcard1">Kindergarten</p>
                    <p className="addcard2">Only for children of age 4-5 years</p>
                    <p className="addcard3">Rs 3000 <span className="addcard4">/ per month</span></p>
                    <p className="addcard5">Billed Annually</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <p className="aboutstyle6">Enrollment Requirements</p>
          <div className="container" id="center">
            <div className="row" id="center">
              <div className="col-md-3 col-sm-6">
                <figure>
                  <img src="./images/req1.jpg" alt="" className="img-fluid" />
                  <figcaption className="addfig">
                    Age Requirements - must <div className="textalign">be 3 to 5 years</div>
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-3 col-sm-6">
                <figure>
                  <img src="./images/req2.jpg" alt="" className="img-fluid" />
                  <figcaption className="addfig">
                    Immunization Requirements
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-3 col-sm-6">
                <figure>
                  <img src="./images/req3.jpg" alt="" className="img-fluid" />
                  <figcaption className="addfig">
                    Residency Requirements
                  </figcaption>
                </figure>
              </div>
              <div className="col-md-3 col-sm-6">
                <figure>
                  <img src="./images/req4.jpg" alt="" className="img-fluid" />
                  <figcaption className="addfig1">
                    Parents/Guardians Identification
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
