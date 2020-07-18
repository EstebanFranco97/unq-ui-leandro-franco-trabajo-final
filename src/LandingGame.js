import React from 'react';
import { Link,Redirect } from 'react-router-dom';

import './LandingGame.css'
import HeaderGame from './HeaderGame';

export default class LandingGame extends React.Component{

    render (){
        return (
          <>
            <div className = "containerLanding">
                
                <div className ="headerLanding">
                    <HeaderGame/>
                </div>    

                <div className ="bodyLanding">  
                    <p>Select your NickName</p>
                    <div className ="inputNickname">                 
                        <div class="input-group input-group-sm  mb-3" >
                            <input type="text" class="form-control " placeholder="nickname" aria-label="nickname" aria-describedby="basic-addon2"/>
                            <div class="input-group-append">
                                <button class="btn btn-outline-primary button-game" type="button">Select</button>
                            </div>
                        </div>
                    </div>
                    <div className ="gamemodes">
                        <p>Choose Game mode</p>
                        <button type="button" class="button-game button-landing" onClick={<Redirect to='/single' />}>SingleMode</button>
                        <button type="button" class="button-game button-landing">VersusMode</button>                 
                    </div>
                    <p>Rules</p>
                    <img src="https://zupher.files.wordpress.com/2012/02/bigbang51711.jpg" class="img-fluid rounded mx-auto d-block img-thumbnail" alt="Responsive image" />
                </div>
                
                <div className ="footerLanding">
                    <div className ="jumbotron jumbotron-fluid bg-primary jumbotron-footer" >
                        <p>See the Making of this game !On react!</p>
                    </div>
                </div>

            </div>           
          </>
        );
    }
}