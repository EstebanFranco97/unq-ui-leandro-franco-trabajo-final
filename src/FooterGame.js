import React, { useState } from 'react';
import './css/FooterGame.css';
import {Link} from "react-router-dom";


export default function FooterGame(){
    
    return(
        <div className ="jumbotron jumbotron-fluid bg-primary jumbotron-footer" >
                        <p>See the Making of this game !On react!<a href ='https://github.com/DoomSlayer01/unq-ui-leandro-franco-trabajo-final'>Here</a></p>
        </div>
    );
}