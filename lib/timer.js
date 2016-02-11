export default class Timer extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      time: this.props.startTime || 20
    };
  }
  
  componentDidMount(){
    this.setState({
      interval: setInterval(this.updateTime.bind(this), 1000)
    })
  }
  
  updateTime(){
    let currentTime = this.state.time;
    if (currentTime === 1){
      clearInterval(this.state.interval);
      window.dispatchEvent(new Event('end'))
    }
    this.setState({time: this.state.time - 1});
  }
  
  render() {
    return <div className="react-game__timer">Time Left: {this.state.time}</div>;
  }
}