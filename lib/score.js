'use strict';

export default class Score extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      score: 0
    };
    
    window.addEventListener('score', this.updateScore.bind(this));
    window.addEventListener('decscore', this.decrementScore.bind(this))
  }
  
  updateScore(){
    this.setState({score: this.state.score + 100});
  }
  
  decrementScore(){
    this.setState({score: this.state.score -10});
  }
  
  render() {
    return <div className="react-game__score">Score: {this.state.score}</div>;
  }
}