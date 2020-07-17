import React from 'react';
import Choise from './Choise'
import './ChoisesSelectBar.css'

export default function ChoiseSelectBar({selectChoise}) {
    
    return (
        <div>
            <button type="button" className="button  btn-size" onClick ={()=>selectChoise ("rock")}><Choise choice ={'rock'}/> Rock </button>
            <button type="button" className="button  btn-size" onClick ={()=>selectChoise ("paper")}> <Choise choice ={'paper'}/> Paper </button>                 
            <button type="button" className="button  btn-size" onClick ={()=>selectChoise ("scissors")}> <Choise choice ={'scissors'}/> Scissors </button>                 
            <button type="button" className="button  btn-size" onClick ={()=>selectChoise ("lizard")}> <Choise choice ={'lizard'}/> Lizard </button>                 
            <button type="button" className="button  btn-size" onClick ={()=>selectChoise ("spock")}> <Choise choice ={'spock'}/> Spock </button>                 
        </div>  
    );
}