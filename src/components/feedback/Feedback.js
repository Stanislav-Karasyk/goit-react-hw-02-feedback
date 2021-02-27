import React, { Component } from 'react';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnGood = () => {
    this.setState({ good: this.state.good + 1 });
  };

  handleBtnNeutral = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  handleBtnBad = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <div className="container">
          <h2>Please leave feedback</h2>
          <button onClick={this.handleBtnGood}>Good</button>
          <button onClick={this.handleBtnNeutral}>Neutral</button>
          <button onClick={this.handleBtnBad}>Bad</button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>
            Good: <span>{good}</span>
          </p>
          <p>
            Neutral: <span>{neutral}</span>
          </p>
          <p>
            Bad: <span>{bad}</span>
          </p>
          <p>
            Total: <span>{this.countTotalFeedback()}</span>
          </p>
          <p>
            Positive Feedback:
            <span>{this.countPositiveFeedbackPercentage()}%</span>
          </p>
        </div>
      </>
    );
  }
}

export default Feedback;
