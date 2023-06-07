// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {
    minutesTimer: 25,
    secondsTimer: 0,
    isStarted: false,
  }

  onClickStartPause = () => {
    const {isStarted} = this.state
    if (isStarted === false) {
      this.setState(prevState => ({
        isStarted: !prevState.isStarted,
        minutesTimer: prevState.minutesTimer - 1,
      }))
      this.minutesId = setInterval(this.timerStartMinutes, 60000)
      this.secondsId = setInterval(this.timerStartSeconds, 1000)
    } else {
      this.setState(prevState => ({
        isStarted: !prevState.isStarted,
        minutesTimer: prevState.minutesTimer,
        secondsTimer: prevState.secondsTimer,
      }))
    }
  }

  timerStartMinutes = () => {
    this.setState(prevState => ({
      minutesTimer: prevState.minutesTimer - 1,
    }))
  }

  timerStartSeconds = () => {
    const {secondsTimer} = this.state
    if (secondsTimer === 0) {
      this.setState(prevState => ({
        secondsTimer: prevState.secondsTimer + 60 - 1,
      }))
    } else {
      this.setState(prevState => ({
        secondsTimer: prevState.secondsTimer - 1,
      }))
    }
  }

  onReset = () => {
    this.setState({minutesTimer: 25, secondsTimer: 0, isStarted: false})
  }

  onDecrement = () => {
    const {isStarted} = this.state
    if (isStarted === false) {
      this.setState(prevState => ({minutesTimer: prevState.minutesTimer - 1}))
    }
  }

  onIncrement = () => {
    const {isStarted} = this.state
    if (isStarted === false) {
      this.setState(prevState => ({minutesTimer: prevState.minutesTimer + 1}))
    }
  }

  render() {
    const {minutesTimer, secondsTimer, isStarted} = this.state
    // console.log(minutesTimer)
    // console.log(isStarted)

    const isTimerCompleted = secondsTimer === minutesTimer * 60

    // 5. Check whether the timer is completed or not and the result will be assigned to the isTimerCompleted.
    const minutes = minutesTimer > 9 ? minutesTimer : `0${minutesTimer}`
    const seconds = secondsTimer > 9 ? secondsTimer : `0${secondsTimer} `

    return (
      <div className="app-container">
        <h1> Digital Timer </h1>
        <div className="img-container">
          <div className="timer">
            <h1>
              {' '}
              {minutes} : {seconds}
            </h1>
            <p> {isStarted ? 'Running' : 'Paused'} </p>
          </div>
        </div>
        <div className="options-container">
          <div className="btn-container">
            <button
              className="start-pause  button"
              onClick={this.onClickStartPause}
            >
              <img
                src={
                  isStarted
                    ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png '
                }
                alt="play icon"
                className="btn-img"
              />
              <p> {isStarted ? 'Pause' : 'Start'} </p>
            </button>
            <button onClick={this.onReset} className="start-pause button">
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
                className="btn-img"
              />
              <p> Reset </p>
            </button>

            <div className="timer-limit">
              <button onClick={this.onDecrement} className="inc-dec-btns">
                -
              </button>
              <p> {minutesTimer} </p>
              <button onClick={this.onIncrement} className="inc-dec-btns">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
