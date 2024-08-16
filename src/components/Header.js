import React from "react";
import './Header.css';

function Head(){
    return(
        <header>
            <nav class="navbar">
                <ul>
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Vision</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Head;