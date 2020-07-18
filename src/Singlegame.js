import React from 'react';
import './Singlegame.css'
import ChoiseSelectBar from './ChoisesSelectBar'
  

export default class Singlegame extends React.Component {
  constructor(props){
      super(props);
      this.state={
          player:{
              playerId : "",
              playerSelecton : null 
              },
          ia:{
              iaId : "sheldon",
              iaSelection : null
          },
          score:{
              winner : "",
              playerWins :0 ,
              playerloses :0 ,
              tie : 0
          },
          start : false,
          choices:["rock","paper","scissors","lizard","spock"]
     
        }
        
  }
 
  AIRandomPick = () =>{
    return  this.state.choices[Math.floor(Math.random()*this.state.choices.length)];
  }
  


  getWinner =() =>{
      if( this.state.player.playerSelecton===this.state.ia.iaSelection){
          this.setState({
              score:{
                      winner:"tie",
              }
          })
      }
      else
          if(
          (this.state.player.playerSelecton ==="rock" && (this.state.ia.iaSelection ==="scissors"||this.state.ia.iaSelection ==="lizard"))
            ||
          (this.state.player.playerSelecton ==="paper" && (this.state.ia.iaSelection ==="rock"||this.state.ia.iaSelection ==="spock"))
            ||
          (this.state.player.playerSelecton ==="scissors" && (this.state.ia.iaSelection ==="paper"||this.state.ia.iaSelection ==="lizard"))
            ||
          (this.state.player.playerSelecton ==="lizard" && (this.state.ia.iaSelection ==="paper"||this.state.ia.iaSelection ==="spock"))
            ||
          (this.state.player.playerSelecton ==="spock" && (this.state.ia.iaSelection ==="rock"||this.state.ia.iaSelection ==="scissors"))
          )
          {
            this.setState({
              score:{
                      winner:"user",
              }
            })
          }
          else
          {
            this.setState({
              score:{
                      winner:"skynet",
              }
            })
          }
   }
   
  updateScore = () =>{
    if (this.state.score.winner == "tie"){
        this.setState ({score:{tie :this.state.score.tie+1}})
    }
    else{
      if(this.state.score.winner == "user"){
        this.setState ({ score:{playerWins :this.state.score.playerWins+1}
      })
      
      }
      else{
            this.setState ({ score:{playerloses :this.state.score.playerloses +1}
            })
      }
    }  
 }
  
  selectPlayerChoise = (choice) =>{
      this.setState (prevState=>({
                    player:{
                            ...prevState.player,
                            playerSelecton : choice
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

  render(){
   const{player,ia,score,choices}=this.state

    return(
      <div className ="containerGame">
        <div className = "headerSinglegame">
            <div className ="jumbotron jumbotron-fluid">
              <h1 className="display-5 fontsize">Rock Paper Scissors Lizard Spock</h1>
            </div>              
        </div>

        <div className = "bodySinglegame">
            <div className ="gameInfo">
                <div className ="scoreInfo">
                    <p>userSelection ={player.playerSelecton}</p>
                    <p>iaSelection ={ia.iaSelection}</p>
                    <p>wins={score.playerWins}</p>
                    <p>loses={score.playerloses}</p>
                    <p>winner={score.winner}</p> 
                </div>
                <ChoiseSelectBar selectChoise={this.selectPlayerChoise}/>
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
    )
  }
}