import React from 'react';
import { Link } from 'react-router-dom';

import './LandingGame.css'

export default class App extends React.Component{

    render (){
        return (
          <>
            <div className = "containerLanding">
                
                <div className ="headerLanding">
                    <div className ="jumbotron jumbotron-fluid bg-primary">
                        <h1 class="display-5">Rock Paper Scissors Lizard Spock</h1>
                    </div>
                </div>    

                <div className ="bodyLanding">  
                    <h3>Select your NickName</h3>
                    <div className ="inputNickname">                 
                        <div class="input-group input-group-lg  mb-3" >
                            <input type="text" class="form-control " placeholder="nickname" aria-label="nickname" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                <button class="btn btn-outline-primary" type="button">Select</button>
                            </div>
                        </div>
                    </div>
                    <hr class="my-4"/>
                    <h3 >Choose Game mode</h3>
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary rounded-pill">SingleMode</button>
                        <button type="button" class="btn btn-primary rounded-pill">VersusMode</button>                 
                    </div>
                    <hr class="my-4"/>
                    <h3 >Rules</h3>
                    <img src="https://zupher.files.wordpress.com/2012/02/bigbang51711.jpg" class="img-fluid rounded mx-auto d-block img-thumbnail" alt="Responsive image" />
                </div>
                
                <div className ="footerLanding">
                    <div className ="jumbotron jumbotron-fluid bg-primary">
                        <p>See the Making of this game !On react!</p>
                    </div>
                </div>

            </div>           
          </>
        );
    }
}