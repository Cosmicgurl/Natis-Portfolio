import React, { useRef } from "react";
import "./Contact.css";
import GitHub from "../src/GitHub.png";
import LinkedIn from "../src/LinkedIn.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(`service_yp08bvf`, `template_j3nezmp`, form.current, {
        publicKey: `Q5tnsL1n5UmcF3fEl`,
      })
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert(`Email sent!`);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="Contact">
      <h1 className="ContactPageTitle">Contact me</h1>
      <span className="ContactDescription">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form
        className="ContactForm"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          className="Name"
          placeholder="Your Name"
          name="from_name"
        />
        <input
          type="text"
          className="Email"
          placeholder="Your Email"
          name="your_email"
        />
        <textarea
          name="message"
          className="msg"
          rows="5"
          placeholder="Your message"
        ></textarea>
        <button
          type="submit"
          value="Send"
          className="SubmitBtn"
        >
          Submit
        </button>
        <div className="Links">
          <img
            src={GitHub}
            alt="GitHub"
            className="Link"
            width="70px"
          />
          <img
            src={LinkedIn}
            alt="LinkedIn"
            className="Link"
            width="70px"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
