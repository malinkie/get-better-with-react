'use strict';

import Card from './card';

const COLORS = [
  'red',
  'green',
  'blue',
  'yellow',
  'magenta'
];

export default class Grid extends React.Component {
  
  reorderCards(cardArray){
    const reorderedArray = [];
    while(cardArray.length){
      let pos = Math.floor(Math.random() * cardArray.length);
      reorderedArray.push(cardArray.splice(pos, 1)[0])
    }
    this.children = reorderedArray;
    return reorderedArray;
  }
  
  render(){
    let size = Math.floor(this.props.size / 2);
    const cards = [];
    while (size > 0){
      const nextColor = COLORS[size % COLORS.length];
      cards.push(<Card bgColor={nextColor} ref={`card1${size}`} key={`card1${size}`} parent={this} />);
      cards.push(<Card bgColor={nextColor} ref={`card2${size}`} key={`card2${size}`} parent={this}/>);
      size--;
    }
    
    return <ul className="react-game__grid">{this.reorderCards(cards)}</ul>;
  }
}