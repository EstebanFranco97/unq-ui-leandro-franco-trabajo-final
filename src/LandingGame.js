import React,{useState} from 'react';
import HeaderGame from './HeaderGame';
import FooterGame from './FooterGame';
import './css/LandingGame.css'
import {useHistory} from 'react-router-dom'




export default function LandingGame(props){

    const[nickName,setNickName] = useState("")
    const history = useHistory()

    const handleChange = (event) =>{
        setNickName(event.target.value)
     
    }


    const clickSingleMode = () =>{
        if(nickName.length === 0){
            alert("Please choose a nickname before continue")
        }
        else{
        history.push('/single/'.concat(nickName));
        }
    }

    
    const clickVersusMode = () =>{
        if(nickName.length === 0){
            alert("Please choose a nickname before continue")
        }
        else{
        history.push('/versus/'.concat(nickName));
        }
    }

    

    return (
          <>
            <div className = "containerLanding">

                <div className ="headerLanding">
                    <HeaderGame/>
                </div>

                <div className ="bodyLanding">
                    <p>Select your NickName</p>
                    <div className ="inputNickname">
                        <input type="text" class="form-control" placeholder="nickname" aria-label="nickname" aria-describedby="basic-addon2"  onChange={handleChange}/>
                    </div>
                    <div className ="gamemodes">
                        <p>Choose Game mode</p>
                        <button type="button" className=" button-game button-landing" onClick={clickSingleMode}>SingleMode</button>
                        <button type="button" className="button-game button-landing" onClick={clickVersusMode} >VersusMode</button>
                    </div>
                    <p>Rules</p>
                    <img src="https://zupher.files.wordpress.com/2012/02/bigbang51711.jpg" class="img-fluid rounded mx-auto d-block img-thumbnail" alt="Responsive image" />
                </div>

                <div className ="footerLanding">
                    <FooterGame/>
                </div>

            </div>
          </>
        );
}
