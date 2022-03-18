
import React, { useState } from "react";

import "../styles/Reserve.css";

function Reserve() {
    const [select, setSelect] = useState();
    const [date, setDate] = useState();
    return (
        <div className="reserve">
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



                    <label htmlFor="amount">How Many People</label>
                    <select className='reserve'> <select value={select} onChange={e => setSelect(e.target.value)} />
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>


                    <label htmlFor="date">Which day will you like to book</label>
                    <input className='reserve' type="date" onChange={e => setDate(e.target.value)} />

                    <textarea
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        required
                    ></textarea>
                    <button type="submit"> Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Reserve;