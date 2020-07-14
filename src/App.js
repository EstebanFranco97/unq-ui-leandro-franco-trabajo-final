import LandingGame from './LandingGame '
import Singlegame from './Singlegame'
import VsGame from './VsGame'
import NotFoundPage from './NotFoundPage'

export default class App extends React.component {
  
  render(){
    return (
      <Router>
        <Switch>            
            <Route exact path= '/' component={LandingGame}/>
            <Route exact path= '/single-game-mode' component={Singlegame}/>
            <Route exact path= '/vs-game-mode' component ={Vsgame}/>        
            <Route path='*'  component={NotFoundPage}/>
        </Switch>
      </Router>
    );
  }
}

