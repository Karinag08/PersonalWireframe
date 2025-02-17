import React from "react";
import "./Contact.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <form>
        <label>First Name</label>
        <input
          type="text"
          class="name"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        ></input>
        <label>Last Name</label>
        <input
          type="text"
          className="name"
          id="lname"
          name="lastname"
          placeholder="Your last name.."
        />
        <label>Country</label>
        <select id="country" name="country">
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="uk">United Kingdom</option>
          <option value="australia">Australia</option>
        </select>
        <select id="country" name="country">
          <option value="usa">USA</option>[ Add a couple more countries]
        </select>
        <label>Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something..."
          rows="4"
        ></textarea>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default ContactForm;
