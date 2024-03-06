import React, { useState } from 'react';
import './App.css';

function App() {
  // State to track whether the form has been submitted
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // Function to handle form submission
  function FormSubmit(e) {
    e.preventDefault();

    // If form has already been submitted, prevent duplicate submissions
    if (isFormSubmitted) {
      console.log("Form already submitted.");
      return;
    }

    // Get the form element and create a FormData object
    const formEle = document.querySelector("form");
    const formRespE = new FormData(formEle);

    // Convert FormData to a JavaScript object
    const formDataObject = {};
    formRespE.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log("Form Data:", formDataObject);

    // Send form data to a Google Apps Script endpoint
    fetch(
      "https://script.google.com/macros/s/AKfycbxQxa7q05XGTGhla_Pts8cA8d3FS0Cmj-RLtO6ZQuUAaxKMkJVyoruZuVd0JZaA3bztHg/exec",
      {
        method: "POST",
        body: new URLSearchParams(formRespE)
      }
    )
      .then((res) => {
        if (!res.ok) {
          // Throw an error for unsuccessful responses
          throw new Error(`Server responded with status ${res.status}`);
        }

        // Check the response content type
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return res.json(); // Parse JSON response
        } else {
          return res.text(); // Handle response as text or in another way
        }
      })
      .then((data) => {
        console.log(data);
        // Update state, display success message, and clear the form
        setIsFormSubmitted(true);
        dispalyResponseMessage("Your response was Successful");
        clearForm();
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Display error message for unsuccessful submissions
        dispalyResponseMessage("Your response was Unsuccessful. Please try again");
      });
  }

  // Function to display a response message
  function dispalyResponseMessage(message) {
    const divEle = document.querySelector(".response-div");
    divEle.textContent = message;
    divEle.classList.add("response-message");
  }

  // Function to clear the form with a confirmation prompt
  function clearForm() {
    if (window.confirm("Do you really want to clear the form?")) {
      const formEle = document.querySelector("form");
      formEle.reset();
    }
  }

  return (
    <div className="App">
      <div className="flex-box">
        <div className="left">
          <img src="./5124556.jpg" className="left-image" alt='image_not_found'></img>
        </div>
        <div className="right">
          <h3 className="heading">Contact Us</h3>
          {/* Form with input fields and submission handling */}
          <form className="contact-form" onSubmit={(e) => FormSubmit(e)}>
            <input placeholder="Your Name" name="Name" type="text" required autoComplete="name" />
            <input type="tel" name="Phone" placeholder="Phone" pattern="[0-9]{10}" required autoComplete="tel" />
            <input placeholder="Your Email" name="Email" type="email" required autoComplete="email" />
            <input placeholder="your Message" name="Message" type="text" required autoComplete="off" />
            <button type="submit">Submit</button>
          </form>
          {/* Container for displaying response messages */}
          <div className="response-div"></div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default App;
