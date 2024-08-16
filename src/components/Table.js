import React from "react";
import './Table.css';

function Tab(){
    return(
        <div class="whole">
        <table>
            <tr>
                <th>S.NO</th>
                <th>NAME</th>
                <th>REG.NO</th>
                <th>DEPT</th>
                <th>COLLEGE</th>
            </tr>
            <tr>
                <td>01</td>
                <td><a>Harvey</a></td>
                <td><a>51</a></td>
                <td>IT</td>
                <td>HICET</td>
            </tr>
            <tr>
                <td>02</td>
                <td><a>Mike</a></td>
                <td><a>52</a></td>
                <td>ECE</td>
                <td>HIT</td>
            </tr>
            <tr>
                <td>03</td>
                <td><a>Louis</a></td>
                <td><a>53</a></td>
                <td>AIML</td>
                <td>HICET</td>
            </tr>
            <tr>
                <td>04</td>
                <td><a>Donna</a></td>
                <td><a>54</a></td>
                <td>IT</td>
                <td>HICET</td>
            </tr>
            <tr>
                <td>05</td>
                <td><a>Jessica</a></td>
                <td><a>55</a></td>
                <td>IT</td>
                <td>HICET</td>
            </tr>
        </table>
        </div>
    );
}

export default Tab;