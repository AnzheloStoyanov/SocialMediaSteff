import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'; // Import axios for making HTTP requests
import "./accommodatio.scss";

export default function Trainings() {
  const location = useLocation();
  const [email, setEmail] = useState(""); // State to store the email input value
  const [subscriptionStatus, setSubscriptionStatus] = useState(""); // State to track subscription status
  const [errorMessage, setErrorMessage] = useState(""); // State to store error message
  const [successMessage, setSuccessMessage] = useState(""); // State to store success message

  const handleEmailChange = (event) => {
    setEmail(event.target.value); // Update email state as user types
    setErrorMessage(""); // Clear error message when user types
    setSuccessMessage(""); // Clear success message when user types
  };

  const validateEmail = (email) => {
    // Regular expression for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    try {
      // Make a POST request to your server endpoint
      await axios.post('http://soacial-media-api.vercel.app/trainings', { email });
      // If the request is successful, update subscription status and apply styles
      setSubscriptionStatus("done");
      setSuccessMessage("You have successfully subscribed!"); // Set success message
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
      setErrorMessage("Failed to submit form. Please try again later.");
    }
  };

  return (
    <>
      <div className="trainigs-page">
        <h1  data-aos-duration="1000">ОБУЧЕНИЯ</h1>
        <div>
          <h2>ОЧАКВАЙТЕ СКОРО!</h2>
          <div className={`container ${subscriptionStatus}`}>
            <div className="content">
              <form className="subscription">
                <input
                  className={`add-email ${errorMessage && 'error'}`}
                  type="email"
                  placeholder="subscribe@me.now"
                  value={email}
                  onChange={handleEmailChange}
                />
               
                <button
                  className="submit-email"
                  type="button"
                  onClick={handleSubmit}
                  disabled={subscriptionStatus === "done"} // Disable the button when subscription is done
                >
                  <span className="before-submit">Subscribe</span>
                </button>
              </form>
            </div>
			{errorMessage && <span className="error-message">{errorMessage}</span>}
                {successMessage && <span className="success-message">{successMessage}</span>}
          </div>
        </div>
      </div>
    </>
  );
}
