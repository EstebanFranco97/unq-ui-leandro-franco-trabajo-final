import React from 'react';
import './Singlegame.css'
import { useState } from 'react';
import ChoiseSelectBar from './ChoisesSelectBar'
  
export default function Singlegame() {
  // const playerID =props.match.params.id
  const[userChoise,setUserChoise] = useState(undefined);
  const[iaChoise,setIaChoise] = useState(undefined);
  const[winner,setWinner] = useState (undefined);
  const choices = ["paper","rock","scissors","lizard","spock"];
  const [userScore,setUserScore] = useState(0)
  const [iaScore,setIaScore] = useState(0)
  const [tieScore,setTieScore] = useState(0)
  //  const choices  =  {
    //                      rock : {name: "Rock", defeats: ["scissors","lizard"]},
    //                      paper: {name: "Paper", defeats: ["rock", "spock"]},
    //                      scissors: {name: "Scissors", defeats: ["paper", "lizard"]},
    //                      lizard: {name: "Lizard", defeats:["paper","spock"]},
    //                      spock: {name: "Spock", defeats:["scissors","rock"]}
    //                   };
  const updateScore = ()=>{
    if(winner ==="tie"){
        setTieScore(tieScore+1)
    }
    else if (winner === "sheldon"){
              setUserScore(userScore+1)
              return (
                <div>{userChoise} defeats {iaChoise}</div>
              );
        }
         else{
              setIaScore(iaScore+1)
              return (
                <div>{iaChoise} defeats {userChoise}</div>
              );
        }
    }

  function AIRandomPick (){
    return choices[Math.floor(Math.random()*choices.length)];
  }
  
  function getWinner (){
    if(userChoise===iaChoise){
        setWinner ("tie")
    }
    else
          if(
            (userChoise ==="rock" && (iaChoise ==="scissors"||iaChoise ==="lizard"))
            ||
            (userChoise ==="paper" && (iaChoise ==="rock"||iaChoise ==="spock"))
            ||
            (userChoise ==="scissors" && (iaChoise ==="paper"||iaChoise ==="lizard"))
            ||
            (userChoise ==="lizard" && (iaChoise ==="paper"||iaChoise ==="spock"))
            ||
            (userChoise ==="spock" && (iaChoise ==="rock"||iaChoise ==="scissors"))
          )
          {
            setWinner("user")
          }
          else
          {
            setWinner("sheldon")  
          }
       
   }
  


  const selectPlayerChoise = (choice) => {
    setIaChoise(AIRandomPick())
    setUserChoise(choice)
     // updateScore()
  }
  // const resetGame = () =>{
    
  // }

  console.log(userChoise)
  console.log(AIRandomPick())
  console.log(winner)
 
  return(
    <div className ="containerGame">
      <div className = "headerSinglegame">
          <div className ="jumbotron jumbotron-fluid">
             <h1 class="display-5 fontsize">Rock Paper Scissors Lizard Spock</h1>
          </div>              
      </div>

      <div className = "bodySinglegame">
          <div className ="gameInfo">
              <div className ="scoreInfo">
                  <p>score</p>
                  <p>userChoise={userChoise}</p>
                  <p>iaChoise = {iaChoise}</p>
                  <p>winner = {winner}</p> 
              </div>
              <button type ="button" onClick ={getWinner} className="button-game"> play </button>
             
              <ChoiseSelectBar selectChoise={selectPlayerChoise }/>
          </div>
          <div className = "gameButtons">
              <button type ="button" className ="button-game button-rematch"> Rematch </button>
              <button type ="button" className ="button-game button-home" > Home </button>
          </div>
          <div className = "winner scoreInfo">
                  
          </div>
      </div>
      
      <div className = "footerSinglegame">

      </div>
      
    </div>
      
      // /*  cosas para agregar a la wea esta
      // <button type ="button" onClick ={getWinner}> rematch </button>
      // <button type ="button" onClick ={getWinner}> rules </button>
      // <button type ="button" onClick ={getWinner}> rematch </button> 

           
    
   )

}