import React, { useState } from 'react';
import { Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Validation schema
const schema = yup.object().shape({
  Name: yup.string().required('Name is required'),
  Email: yup.string().email('Invalid email format').required('Email is required'),
  PhoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, 'Phone Number must be a number')
    .length(10, 'Phone Number must be exactly 10 digits')
    .required('Phone Number is required'),
  Subject: yup.string().required('Subject is required'),
  Message: yup.string().required('Message is required'),
});

export const ContactUs = () => {
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const { TextArea } = Input;
  const [status, setStatus] = useState("");

  // Get backend URL from env variable (fallback to localhost for dev)
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001/api/contact";

  const onSubmit = async (data) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.Name,
          email: data.Email,
          message: `${data.Subject} | ${data.Message} | Phone: ${data.PhoneNumber}`
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        reset(); // clear form fields
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("❌ Error connecting to server.");
    }
  };

  return (
    <>
      <p className="contactstyle1">Contact Us</p>
      <div className="container">
        <div className="row">
          {/* Left form section */}
          <div className="col-12 col-md-6" id="antdleft">
            <p className="contactustext1">
              Have questions or need more information? Reach out to Oasis Preschool through our contact details below, or fill out our inquiry form, and we'll be happy to assist you!
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Name */}
              <div className="form-group">
                <label>Name</label>
                <Controller
                  control={control}
                  name="Name"
                  render={({ field }) => <Input {...field} />}
                />
                {errors.Name && <p className="error">{errors.Name.message}</p>}
              </div>

              {/* Email */}
              <div className="form-group">
                <label>Email</label>
                <Controller
                  control={control}
                  name="Email"
                  render={({ field }) => <Input {...field} />}
                />
                {errors.Email && <p className="error">{errors.Email.message}</p>}
              </div>

              {/* Phone Number */}
              <div className="form-group">
                <label>Phone Number</label>
                <Controller
                  control={control}
                  name="PhoneNumber"
                  render={({ field }) => <Input {...field} />}
                />
                {errors.PhoneNumber && <p className="error">{errors.PhoneNumber.message}</p>}
              </div>

              {/* Subject */}
              <div className="form-group">
                <label>Subject</label>
                <Controller
                  control={control}
                  name="Subject"
                  render={({ field }) => <Input {...field} />}
                />
                {errors.Subject && <p className="error">{errors.Subject.message}</p>}
              </div>

              {/* Message */}
              <div className="form-group">
                <label>Message</label>
                <Controller
                  control={control}
                  name="Message"
                  render={({ field }) => <TextArea rows={4} {...field} />}
                />
                {errors.Message && <p className="error">{errors.Message.message}</p>}
              </div>

              {/* Submit button */}
              <button type="submit" className="contactbutton">Submit</button>
            </form>

            {/* Feedback message */}
            {status && <p style={{ marginTop: "10px" }}>{status}</p>}
          </div>

          {/* Right info section */}
          <div className="col-12 col-md-6 position-relative">
            <img src="./images/designcon.jpg" alt="" className="contactrect" />
            <div className="text-overlay">
              <p className="text1">Contact Information</p>
              <div className="contact-info">
                <img src="./images/location.jpg" alt="" className="icons" />
                <p className="text2">
                  Kurmannapalem, Visakhapatnam, <br />
                  Andhra Pradesh 530046
                </p>
                <img src="./images/phone.jpg" alt="" className="icons" />
                <p className="text3">+91 7834562321</p>
                <img src="./images/email.jpg" alt="" className="icons" />
                <p className="text4">oasispreschool@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map section */}
      <div className="container">
        <img src="./images/map.jpg" alt="" className="map" />
      </div>
    </>
  );
};
