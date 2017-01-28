import React, { Component, PropTypes } from 'react';
import { extractTimeParts } from '../lib/utils';

const Header = (props) => (
    <div className='header'>
        <h2>{props.text}</h2>
    </div>
)

const Screen = (props) => (
    <div className='timer'>
        <span className='timer-m'>{props.minutes}</span>
        <span className='timer-s'>:{props.seconds}</span>
        <span className='timer-ms'>:{props.milliseconds}</span>
    </div>
)

const Buttons = (props) => (
    <div className='actions'>
        <button onClick={props.onStop}>Stop</button>
        <button onClick={props.onStart}>Start</button>
    </div>
)

Buttons.PropTypes = {
    onStart: PropTypes.func,
    onStop: PropTypes.func
}

class Cronometro extends Component {
    constructor() {
        super();
        this.state = {
            isRunning: false,
            start: 0,
            current: 0
        }
        this.handleStart = this.handleStart.bind(this)
        this.handleStop = this.handleStop.bind(this)
    }
    handleStart() {
        console.log('Start')
        if (this.state.isRunning) return;
        this.setState({
            isRunning: true,
            start: Date.now(),
            current: Date.now()
        })
        this._interval = setInterval(() => {
            this.setState({
                current: Date.now()
            })
        }, 100);
    }
    handleStop() {
        console.log('Stop');
        if (this.state.isRunning) {
        clearInterval(this._interval);
        this.setState({
            isRunning: false,
        })
        } else {
          this.setState({
            start: 0,
            current: 0
        })  
        }
    }

    render() {
        const {start, current} = this.state;
        const time = extractTimeParts(current - start);
        return (
            <div className='crono'>
                <Header text={'Cronómetro'} />
                <div className='content'>
                    <Screen
                        minutes={time.minutes}
                        seconds={time.seconds}
                        milliseconds={time.milliseconds}
                        />
                    <Buttons
                        onStart={this.handleStart}
                        onStop={this.handleStop}
                        />
                </div>
            </div>
        )
    }
}

export default Cronometro;