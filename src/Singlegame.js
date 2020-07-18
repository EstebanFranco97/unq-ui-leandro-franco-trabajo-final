import React from 'react';
import './Singlegame.css'
import ChoiseSelectBar from './ChoisesSelectBar'
import HeaderGame from './HeaderGame';

const posibleResults ={
                        rock : {name: "rock", defeats: ["scissors","lizard"]},
                        paper: {name: "paper", defeats: ["rock", "spock"]},
                        scissors: {name: "scissors", defeats: ["paper", "lizard"]},
                        lizard: {name: "lizard", defeats:["paper","spock"]},
                        spock: {name: "spock", defeats:["scissors","rock"]}
};


export default class Singlegame extends React.Component {
  constructor(props){
      super(props);
      this.state={
          player:{
              playerId : "",
              playerSelection : null 
              },
          ia:{
              iaId : "sheldon",
              iaSelection : null
          },
            winner:"",
            wins:0 ,
            loses:0 ,
            tie:0,
          choices:["rock","paper","scissors","lizard","spock"],
          result:"Waiting both choose one"
        }
        
  }
 
  
  AIRandomPick = () =>{
    return  this.state.choices[Math.floor(Math.random()*this.state.choices.length)];
  }
  
  
  getWinner =() =>{
      if( this.state.player.playerSelection===this.state.ia.iaSelection){
          this.setState(prevState=>({
              ...prevState.winner,                     
              winner:"tie",
          }),
          ()=>{
                this.updateScore()
              })
      }
      else
          if(
          (this.state.player.playerSelection ==="rock" && (this.state.ia.iaSelection ==="scissors"||this.state.ia.iaSelection ==="lizard"))
            ||
          (this.state.player.playerSelection ==="paper" && (this.state.ia.iaSelection ==="rock"||this.state.ia.iaSelection ==="spock"))
            ||
          (this.state.player.playerSelection ==="scissors" && (this.state.ia.iaSelection ==="paper"||this.state.ia.iaSelection ==="lizard"))
            ||
          (this.state.player.playerSelection ==="lizard" && (this.state.ia.iaSelection ==="paper"||this.state.ia.iaSelection ==="spock"))
            ||
          (this.state.player.playerSelection ==="spock" && (this.state.ia.iaSelection ==="rock"||this.state.ia.iaSelection ==="scissors"))
          )
          {
            this.setState(prevState=>({
                ...prevState.winner,
                winner:"user",
            }),
            ()=>{
                  this.updateScore()
                })
          }
          else
          {
            this.setState(prevState=>({
                ...prevState.winner,
                winner:"sheldon"
            }),
            ()=>{
                  this.updateScore()
                })
          }
   }


  updateResult = () =>{
    switch (this.state.winner){
      case "" : return <p>Waiting both choose </p> 
      case "tie":return<p>game tied</p> 
      case "user":return<p>You win {this.state.player.playerSelection} defeats {this.state.ia.iaSelection}</p>
      case "sheldon":return<p>You lose {this.state.ia.iaSelection} defeats {this.state.player.playerSelection}</p>
    }
  }

   
   updateScore = () =>{
    if (this.state.winner === "tie"){
        this.setState (prevState =>({
            ...prevState.tie,
            tie : this.state.tie +1
        })
       
        )
    }
    else{
      if(this.state.winner === "user"){
        this.setState (prevState =>({
            ...prevState.wins,
            wins : this.state.wins +1
        })
        )
      }
      else{
         this.setState (prevState =>({
            ...prevState.loses,
            loses : this.state.loses+1
        })
        )
      }
    }  
  }


  selectPlayerChoise = (choice) =>{
      this.setState (prevState=>({
                    player:{
                            ...prevState.player,
                            playerSelection : choice
                           },
                    ia:{
                        ...prevState.ia,
                        iaSelection : this.AIRandomPick()
                        }
                    }),
                    () => {
                     this.getWinner ()
                     }
    )
  }

  resetGame=()=>{
    this.setState ({
                   player:{
                           playerSelection : null
                   },
                   ia:{
                     iaSelection : null
                   },
                    winner :"",
                    wins : 0,
                    loses : 0,
                    tie : 0
                  })
  }

  
  
  render(){
   const{wins,loses,tie,result,choices}=this.state

    return(
      <div className ="containerGame">
        <div className = "headerSinglegame">
            <HeaderGame/>             
        </div>

        <div className = "bodySinglegame">
            <div className ="gameInfo">
                <div className ="info">
                    <p>score</p>
                    <p>wins={wins}</p>
                    <p>loses={loses}</p>
                    <p>tie={tie}</p>
                </div>
                <ChoiseSelectBar selectChoise={this.selectPlayerChoise}/>
            </div>
            <div className = "gameButtons">
                <button type ="button" className ="button-game button-rematch"onClick={()=>this.resetGame()}> Rematch </button>
                <button type ="button" className ="button-game button-home" > Home </button>
            </div>
            <div className = "winner info-Result">
                <p>{this.updateResult()}</p>
           </div>
        </div>

        <div className = "footerSinglegame">

        </div>
      
    </div>
    )
  }
}