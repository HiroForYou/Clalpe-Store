import React from "react";
import FormContainer from "../components/FormContainer";
import { Form, Button, FormGroup } from "react-bootstrap";
import emailjs from "emailjs-com";

const ContactScreen = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_cxj26sc",
        e.target,
        "user_ImpH3hzdhauxEaSxJCXG6"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <FormContainer>
      <h1>Contact Us</h1>
      <Form onSubmit={sendEmail}>
        <FormGroup controlId="name">
          <label htmlFor="name">NAME</label>
          <input
            type="name"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            name="name"
            required
          />
        </FormGroup>
        <FormGroup controlId="email">
          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
            name="email"
            required
          />
        </FormGroup>
        <FormGroup controlId="subject">
          <label htmlFor="subject">SUBJECT</label>
          <input
            type="subject"
            className="form-control"
            id="subject"
            placeholder="Enter subject"
            name="subject"
            required
          />
        </FormGroup>
        <FormGroup controlId="message">
          {" "}
          <label htmlFor="messsage">MESSAGE</label>
          <textarea
            className="form-control"
            id="messsage"
            rows="5"
            name="message"
            required
          ></textarea>
        </FormGroup>
        <Button type="submit" variant="primary">
          Send Email
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactScreen;
