'use strict'

import _ from 'lodash';

export default class Card extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      show: false,
      matched: false,
      interval: undefined,
      active: true
    };
    
    window.addEventListener('end', (() => {
      this.setState({active: false});
    }).bind(this));
  }
  
  handleClick(e){
    if(!this.state.active) return;
    
    this.setState({"show": true});
    
    const open = _.find(this.props.parent.refs, (card) => 
      card !== this &&
      card.state.show && 
      !card.state.matched
    );
    
    const match = _.find(open, (card) =>
      card.props.bgColor === this.props.bgColor
    );
    
    if(match){
      clearTimeout(this.state.interval);
      clearTimeout(match.state.interval);
      this.setState({matched: true});
      match.setState({matched: true});
      window.dispatchEvent(new Event('score'));
    } else {
      this.setState({interval: setTimeout(() => {this.setState({show: false})}, 2000)});
    }
  }
  
  render(){
    return (
      <div className="react-game__card" onClick={this.handleClick.bind(this)}>
        <div className="react-game__color" style={
          {
            backgroundColor: (this.state.show || this.state.matched) ?this.props.bgColor : 'transparent',
            backgroundImage: (this.state.matched) ? 'url(img/tick.png)' : ''
          }} />
      </div>
    );
  }
}