import Timer from "./timer";
import Score from "./score";
import Grid from "./grid";
import Again from "./again";

export default class ReactGame extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      timestamp: new Date().getTime()
    }
    window.addEventListener('restart', this.restartGame.bind(this));
  }
  
  restartGame(){
    this.setState({
      timestamp: new Date().getTime()
    });
  }
  
  render(){
    return (
      <div key={this.state.timestamp} className="react-game">
        <Timer />
        <Score />
        <Again />
        <Grid size={30}/>
      </div>
    );
  }
}
