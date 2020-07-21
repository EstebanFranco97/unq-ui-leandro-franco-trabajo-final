import React from 'react';
import './Singlegame.css'
import ChoiseSelectBar from './ChoisesSelectBar'
import HeaderGame from './HeaderGame';
import FooterGame from './FooterGame';
import Choise from './Choise';
import './VersusGame.css'


export default class Versusgame extends React.Component {
    constructor(props){
        super(props);
        this.state={
            player:{
                playerId :"",
                playerSelection : null 
            },
            player2:{
                player2Id :"",
                player2Selection : null
            },
            winner:"",
            playerwins:0,
            player2wins:0,
            playerloses:0,
            player2loses:0,
            tie:0,
            showTurnPlayer1:false,
            showTurnPlayer2:false,
            showResult:false,
            showplayer2nickname:true
            }
    }
    
  componentDidMount = () =>{
    this.setState({
                    player:{
                            playerId : this.props.match.params.id
                           }
    })
  }

  getWinner =() =>{
      if( this.state.player.playerSelection===this.state.player2.player2Selection){
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
          (this.state.player.playerSelection ==="rock" && (this.state.player2.player2Selection ==="scissors"||this.state.player2.player2Selection ==="lizard"))
            ||
          (this.state.player.playerSelection ==="paper" && (this.state.player2.player2Selection ==="rock"||this.state.player2.player2Selection ==="spock"))
            ||
          (this.state.player.playerSelection ==="scissors" && (this.state.player2.player2Selection ==="paper"||this.state.player2.player2Selection ==="lizard"))
            ||
          (this.state.player.playerSelection ==="lizard" && (this.state.player2.player2Selection ==="paper"||this.state.player2.player2Selection ==="spock"))
            ||
          (this.state.player.playerSelection ==="spock" && (this.state.player2.player2Selection ==="rock"||this.state.player2.player2Selection ==="scissors"))
          )
          {
            this.setState(prevState=>({
                ...prevState.winner,
                winner: "player1"
            }),
            ()=>{
                  this.updateScore()
                })
          }
          else
          {
            this.setState(prevState=>({
                ...prevState.winner,
                winner:"player2"
            }),
            ()=>{
                  this.updateScore()
                })
          }
   }


  updateResult = () =>{
      switch (this.state.winner){
          case "" : return <p>waiting both choose </p> 
          case "tie":return<p>game tied</p> 
          case "player1" :return<p>{this.props.match.params.id} wins {this.state.player.playerSelection} defeats {this.state.player2.player2Selection}</p>
          case "player2" :return<p> player2 wins {this.state.player2.player2Selection} defeats {this.state.player.playerSelection}</p>
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
      if(this.state.winner === "player2"){
        this.setState (prevState =>({
            ...prevState.player2wins,
            player2wins : this.state.player2wins +1,
            ...prevState.playerloses,
            playerloses : this.state.player2loses +1,
        })
        )
      }
      else{
         this.setState (prevState =>({
            ...prevState.player2loses,
            player2loses : this.state.player2loses+1,
            ...prevState.playerwins,
            playerwins : this.state.playerwins +1
        })
        )
      }
    }  
  }


  selectPlayersChoise1 = (choice) =>{
      this.setState (prevState=>({
                    player:{
                            ...prevState.player,
                            playerSelection : choice
                           },
                    showTurnPlayer2:true,
                    showTurnPlayer1:false
                    }),
                    () => {
                    //  if(this.state.player2.player2Selection === null){
                        
                    //  }
                     }
    )
    console.log(this.state.player.playerSelection)
  }


  selectPlayersChoise2 = (choice) =>{
    this.setState (prevState=>({
                  player2:{
                      ...prevState.player2,
                      player2Selection : choice
                  },
                  ...prevState.showTurnPlayer2,
                  showTurnPlayer2: false,
                  ...prevState.showResult,
                  showResult: true,
                  }),
                  () => {
                   this.getWinner ()
                   }
  )
  console.log(this.state.player2.player2Selection)
  
}

  resetGame=()=>{
    this.setState ({
                   player:{
                           playerSelection : null
                   },
                   player2:{
                           player2Selection : null
                   },
                   winner:"",
                   playerwins:0,
                   player2wins:0,
                   playerloses:0,
                   player2loses:0,
                   tie:0
                  })
  }
  
  playAgain=()=>{
    this.setState ({
                   player:{
                           playerSelection : null
                   },
                   player2:{
                           player2Selection : null
                   },
                   winner:"",
                   showTurnPlayer1:true,
                   showTurnPlayer2: false,
                   showResult: false,
                   })
  }


  click = () => this.props.history.push('/');

  
  
  render(){
   const{  playerwins,
           player2wins,
           playerloses,
           player2loses,
           tie,result,choices}=this.state

    return(
      <div className ="containerVersusGame">
        <div className = "headerSinglegame">
            <HeaderGame/>             
        </div>
        <div className = "bodyVersusgame">
            {
              this.state.showplayer2nickname?
                <div className = "player2nickname">
                   <div class="input-group input-group-sm  mb-3" >
                            <input type="text" class="form-control " placeholder="nickname" aria-label="nickname" aria-describedby="basic-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-outline-primary button-game" type="button">Select</button>
                            </div>
                        </div>
                </div>
            :null
            }                            
            {
              this.state.showTurnPlayer1?   
                <div className = "player1turn">
                    <p className ="turnPlayer">{ this.props.match.params.id} turn </p>
                    <div className ="infoScore">
                        <p>score</p>
                        <p>wins1={playerwins}</p>
                        <p>wins2={player2wins}</p>
                    
                        <p>loses1={playerloses}</p>
                        <p>loses2={player2loses}</p>
                    
                        <p>tie={tie}</p>
                    </div>
                    <div className="buttons">
                        <ChoiseSelectBar selectChoise={this.selectPlayersChoise1}/>
                    </div>                  
                    <button type ="button" className ="buttonr button-game"onClick={()=>this.resetGame()}> Rematch </button>
                    <button type ="button" className ="buttonh button-game " onClick ={this.click} > Home </button>
                </div>
            :null
            } 
            {
              this.state.showTurnPlayer2?   
                <div className = "player2turn">
                    <p className = "turnPlayer">player 2 Turn</p>
                    <div className ="infoScore">
                        <p>score</p>
                        <p>wins1={playerwins}</p>
                        <p>wins2={player2wins}</p>
                    
                        <p>loses1={playerloses}</p>
                        <p>loses2={player2loses}</p>
                    
                        <p>tie={tie}</p>
                   </div>
                    <div className="buttons">                           
                        <ChoiseSelectBar selectChoise={this.selectPlayersChoise2}/>
                    </div>
                    <button type ="button" className ="buttonr button-game"onClick={()=>this.resetGame()}> Rematch </button>
                    <button type ="button" className ="buttonh button-game " onClick ={this.click} > Home </button>
               </div>
            :null
            }
            {
              this.state.showResult?
                <div className = "resultsVersusGame">
                    <div className ="infoScore">
                        <p>score</p>
                        <p>wins1={playerwins}</p>
                        <p>wins2={player2wins}</p>
                    
                        <p>loses1={playerloses}</p>
                        <p>loses2={player2loses}</p>
                    
                        <p>tie={tie}</p>
                    </div>
                    <div className = "playerChoice">
                        <Choise choice = {this.state.player.playerSelection}/>
                        { this.props.match.params.id}
                    </div>
                    <div className = "player2Choice">
                        <Choise choice ={this.state.player2.player2Selection} />
                        player2
                    </div>
                    <div className = "winnerVs info-Result">
                        {this.updateResult()}
                    </div>
                    <button type ="button" className ="buttonr button-game"onClick={()=>this.playAgain()}>play Again </button>
                    <button type ="button" className ="buttonh button-game " onClick ={this.click} > Home </button>
           
                </div>
            :null 
            } 
        </div>

        <div className = "footerSinglegame">
             <FooterGame/>
        </div>
      
    </div>
    )
  }
}