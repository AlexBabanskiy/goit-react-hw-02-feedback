import { Component } from 'react';
import { FeedbackOptions } from './Feedback/ControlButtons/ControlButtons';
import Statistics from './Feedback/Statistics/Statistics';
import Notification from './Feedback/Notifications/Notification';

import {
  FeedbackContainer,
  Title,
  ButtonsContainer,
} from './Feedback/Statistics/Feedback.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
        total: prevState.total + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;

    if (totalFeedback === 0) {
      return 0;
    }

    return Math.round((good / totalFeedback) * 100);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    return (
      <div>
        <FeedbackContainer>
          <Title>Please leave feedback</Title>
          <ButtonsContainer>
            <FeedbackOptions onIncrement={this.onIncrement} options={options} />
          </ButtonsContainer>
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </FeedbackContainer>
      </div>
    );
  }
}

export default App;
