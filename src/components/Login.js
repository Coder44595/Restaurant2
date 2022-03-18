import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url("http://st2.depositphotos.com/3472015/7621/i/450/depositphotos_76214165-Food-background.jpg")` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter password..."
            name="password"
            required
          ></textarea>
          <button type="submit"> Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
