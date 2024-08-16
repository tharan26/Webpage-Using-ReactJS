import React from "react";
import './Form.css';

function Form(){
    return(
        <div>
            <form action="">
                <div>
                    <label for="user">Username</label>
                    <input type="text" placeholder="Enter Your Name" required></input>
                </div>
                <div>
                    <label for="pass">Password</label>
                    <input type="password" placeholder="..........." required></input>
                </div>
                <button>Login</button>
            </form>
        </div>
    );
}

export default Form;