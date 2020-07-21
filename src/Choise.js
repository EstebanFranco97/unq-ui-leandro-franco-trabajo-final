import React, { useState } from 'react';

export default function Choise({choice}){
    
    switch(choice){
       
      case'rock': return <img src={'/004-roca.svg'} alt="rock icon" name ='rock'/>
                
       case'paper': return <img src={'/009-enviar.svg'} alt="paper icon" name ='paper' />

       case'scissors': return <img src={'/006-tijeras-1.svg'} alt="scissors icon" name ='scissors'/>
    
       case'lizard': return <img src={'/002-lagarto.svg'} alt="lizard icon" name ='lizard' />

       case 'spock': return <img src={'/007-vulcan-salute.svg'} alt="spock icon" name ='spock'/>
    }

}