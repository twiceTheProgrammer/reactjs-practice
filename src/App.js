import React from 'react';
import './App.css';

class Timer extends React.Component 
{
    constructor(props)
    {
		super(props);
		this.state = { hours:0, minutes:0, seconds:0 };
    }

	tick() {
		this.setState( state => ({
			hours: state.minutes % 60 === 0 ? state.minutes / 60 : state.hours,
			minutes: state.seconds % 60 === 0 ? state.seconds / 60 : state.minutes ,
			seconds: state.seconds + 1
		}));
	}

	componentDidMount(){
		this.interval = setInterval(() => this.tick(), 1000);
	}

	componentWillUnmount(){
		clearInterval(this.interval);
	}

    render() {
		return (
			<div>
				Time: { `${this.state.hours} : ${this.state.minutes} : ${this.state.seconds}` }
			</div>
		);
    }
}


function App() {
  return (
    <div className="App">
		<Timer />
    </div>
  );
}

export default App;
