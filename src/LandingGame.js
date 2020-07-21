import React,{useState} from 'react';
import './LandingGame.css'
import HeaderGame from './HeaderGame';
import FooterGame from './FooterGame';

export default function LandingGame(props){

    const[nickName,setNickName] = useState("")
    const[choosedNickName,setChoosedNickName] = useState (false)

    const handleChange = (event) =>{
        setNickName(event.target.placeholder)
        // checkChoosedNicKName
    }


    const checkChoosedNicKName = () =>{
        if (nickName === ""){
            setChoosedNickName(true)
        }
    }

    const clickSingleMode = () =>{
        if(choosedNickName === false){
        }
        // props.history.push('/single/'.concat(nickName));
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
                        <div class="input-group input-group-sm  mb-3" >
                            <input type="text" class="form-control " placeholder={nickName} aria-label="nickname" aria-describedby="basic-addon2"  onChange={handleChange}/>
                            <div class="input-group-append">
                                <button class="btn btn-outline-primary button-game" type="button">Select</button>
                            </div>
                        </div>
                    </div>
                    <div className ="gamemodes">
                        <p>Choose Game mode</p>
                        <button to='./single' type="button" className=" button-game button-landing"onClick={clickSingleMode}>SingleMode</button>
                        <button type="button" className="button-game button-landing">VersusMode</button>
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
