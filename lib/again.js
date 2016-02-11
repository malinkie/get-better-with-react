'use strict';

export default class PlayAgain extends React.Component {
  
  handleClick(e){
    window.dispatchEvent(new Event('restart'));
  }
  
  render(){
    return <button onClick={this.handleClick.bind(this)}>Play Again?</button>
  }
}