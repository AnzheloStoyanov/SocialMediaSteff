import React, { useState } from "react";
import "./ContactForm.scss";
import axios from 'axios'; // Import Axios
import { useParams } from "react-router-dom";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    brandName: "",
    brandDescription: "",
    website: "",
    email: "",
    socialMediaHelp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Use Axios to send a POST request
    axios.post('http://localhost:8080/submit-form', formData)
      .then(response => {
        console.log(response.data);
        alert("Form submitted! We will contact you soon.");
      })
      .catch(error => {
        console.error('Error:', error);
        alert("An error occurred. Please try again.");
      });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="brandName">Име на бранда:</label>
        <input type="text" id="brandName" name="brandName" required value={formData.brandName} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="brandDescription">Кратко описание на бранда:</label>
        <textarea id="brandDescription" name="brandDescription" required value={formData.brandDescription} onChange={handleChange}></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="website">Уебсайт:</label>
        <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="email">Имейл:</label>
        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label htmlFor="socialMediaHelp">Как би искал Social Media Steff да помогне на бизнеса ти?:</label>
        <textarea id="socialMediaHelp" name="socialMediaHelp" required value={formData.socialMediaHelp} onChange={handleChange}></textarea>
      </div>
      <div>
        
      </div>
      <div className="form-button">
      <button>РАБОТИ С НАС</button>
      </div>
     
    </form>
  );
};

export default ContactForm;
