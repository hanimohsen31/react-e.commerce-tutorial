import React from "react";
import "./Newsletter.scss";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import emailjs from "emailjs-com";

export const Newsletter = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_418rhh9",
        "template_2fqmuf7",
        e.target,
        "user_m0JLrArxjn3mElbvi39fd"
      )
      .then((response) => {
        console.log(response);
        alert("Thanks for Subscribtion");
        document.querySelector("#email").value = "";
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="Newsletter">
      <div className="container">
        <h2>Newsletter</h2>
        <h5>Get timely from your favourite products.</h5>
        <div className="mail">
          <div className="input-group mb-3">
            <form onSubmit={sendEmail}>
              <input
                name="email"
                id="email"
                type="email"
                className="form-control"
                placeholder="Your email"
                aria-label="email"
                aria-describedby="basic-addon1"
              />
              <button type="submit">
                <span className="input-group-text" id="basic-addon1">
                  <SendOutlinedIcon />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
