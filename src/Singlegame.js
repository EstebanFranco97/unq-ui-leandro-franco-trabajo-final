import React from 'react';
import './css/Singlegame.css';
import ChoiseSelectBar from './ChoisesSelectBar';
import HeaderGame from './HeaderGame';
import FooterGame from './FooterGame';
import Choise from './Choise';




export default class Singlegame extends React.Component {
    constructor(props){
        super(props);
        this.state={
            player:{
                playerId : "",
                playerSelection : null 
            },
            ai:{
                aiId :"sheldon",
                aiSelection : null
            },
            winner:"",
            wins:0 ,
            loses:0 ,
            tie:0,
            choices:["rock","paper","scissors","lizard","spock"],
            showSingleGame:true,
            showResultGame:false
        }
    }
   
    
    
    
  componentDidMount = () =>{
    this.setState(prevState=>({
                    player:{
                            ...prevState.playerId,
                            playerId : this.props.match.params.id
                           }
    }))
  }


  AIRandomPick = () =>{
      return  this.state.choices[Math.floor(Math.random()*this.state.choices.length)];
  }
  
  
  getWinner =() =>{
      if( this.state.player.playerSelection===this.state.ai.aiSelection){
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
          (this.state.player.playerSelection ==="rock" && (this.state.ai.aiSelection ==="scissors"||this.state.ai.aiSelection ==="lizard"))
            ||
          (this.state.player.playerSelection ==="paper" && (this.state.ai.aiSelection ==="rock"||this.state.ai.aiSelection ==="spock"))
            ||
          (this.state.player.playerSelection ==="scissors" && (this.state.ai.aiSelection ==="paper"||this.state.ai.aiSelection ==="lizard"))
            ||
          (this.state.player.playerSelection ==="lizard" && (this.state.ai.aiSelection ==="paper"||this.state.ai.aiSelection ==="spock"))
            ||
          (this.state.player.playerSelection ==="spock" && (this.state.ai.aiSelection ==="rock"||this.state.ai.aiSelection ==="scissors"))
          )
          {
            this.setState(prevState=>({
                ...prevState.winner,
                winner:this.state.player.playerId
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
          case "" : return<p>Waiting both choose </p> 
          case "tie" :return<p>game tied</p> 
          case this.state.player.playerId :return<p>{this.props.match.params.id} wins {this.state.player.playerSelection} defeats {this.state.ai.aiSelection}</p>
          case "sheldon" :return<p> sheldon wins {this.state.ai.aiSelection} defeats {this.state.player.playerSelection}</p>
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
      if(this.state.winner === this.state.player.playerId){
        this.setState (prevState =>({
            ...prevState.wins,
            wins : this.state.wins +1
        })
        )
      }
      else{
         this.setState (prevState =>({
            ...prevState.loses,
            loses : this.state.loses +1
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
                        ai:{
                            ...prevState.ai,
                            aiSelection : this.AIRandomPick()
                           },
                      showSingleGame:false,     
                      showResultGame:true     
                    }),
                    () => {
                     this.getWinner ()
                     }
    )
  }


  resetGame=()=>{
    this.setState (prevState=>({
                   player:{
                           ...prevState.playerSelection,
                           playerSelection : null
                   },
                   ai:{
                     ...prevState.aiSelection,
                     aiSelection : null
                   },
                    ...prevState.winner,
                    winner :"",
                    ...prevState.wins,
                    wins : 0,
                    ...prevState.loses,
                    loses : 0,
                    ...prevState.tie,
                    tie : 0
                  }))
  }


  click = () => this.props.history.push('/');
  
  
  playAgain = () =>{
    this.setState({ 
                  showResultGame: false,
                  showSingleGame: true
                  })
  }

   
  render(){
   const{wins,loses,tie}=this.state

    return(
      <div className ="containerGame">
        <div className = "headerSinglegame">
            <HeaderGame/>             
        </div>
        {
          this.state.showSingleGame?
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
            <div className = "gameButtons2">
                <button type ="button" className ="button-game button-rematch"onClick={()=>this.resetGame()}> Rematch </button>
                <button type ="button" className ="button-game button-home" onClick ={()=>this.click()} > Home </button>
            </div>
           <div className = "winner info-Result">
                {this.updateResult()}
           </div>
        </div>
        :null 
        }
        {
          this.state.showResultGame?
            <div className = "resultsSingleGame">
                <div className ="info">
                    <p>score</p>
                    <p>wins={wins}</p>                      
                    <p>loses={loses}</p>
                    <p>tie={tie}</p>
                </div>
                <div className = "playerChoice">
                    <Choise choice = {this.state.player.playerSelection}/>
                    { this.props.match.params.id}
                </div>
                <div className = "aiChoice">
                    <Choise choice ={this.state.ai.aiSelection} />
                    sheldon                    
                </div>
                <div className = "winnerSingle info-Result">
                    {this.updateResult()}
                </div>
                <button type ="button" className ="buttonr button-game" onClick={()=>this.playAgain()}>Play Again </button>
                <button type ="button" className ="buttonh button-game " onClick ={this.click} > Home </button>
            </div>
          :null 
        } 
        <div className = "footerSinglegame">
            <FooterGame/>
        </div>
      
      </div>
    )
  }
}