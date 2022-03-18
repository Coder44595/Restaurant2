import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc4nUmacM60T2NvKdKrjfYqyGQVhcxgk0sMQ&usqp=CAU")` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}> Le-Restaurant </h1>


        <p>delicious dishes from all across the Globe </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;


