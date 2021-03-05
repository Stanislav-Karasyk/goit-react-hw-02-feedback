import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions.js';
import Notification from './notification/Notification.js';
import Section from './section/Section.js';
import Statistics from './statistics/Statistics.js';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = (e)=>{
    const {name} = e.target
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  }
  
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
        <Section>
          <FeedbackOptions
            onLeaveFeedback="Please leave feedback"
            onHandleClick={this.onHandleClick}
          />
        </Section>  
        {this.countTotalFeedback() ? <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> 
        </Section> : <Notification message="No feedback given"/>}
      </>
    );
  }
}
export default App;
