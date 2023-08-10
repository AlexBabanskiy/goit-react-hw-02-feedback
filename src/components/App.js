import { Component } from 'react';
import {
  GoodButton,
  NeutralButton,
  BadButton,
} from './Feedback/ControlButtons';
import Statistics from './Feedback/Statistics';
import Notification from './Feedback/Notification';

import {
  FeedbackContainer,
  Title,
  ButtonsContainer,
} from './Feedback/Feedback.styled';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  onIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  onIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
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
    return (
      <div>
        <FeedbackContainer>
          <Title>Please leave feedback</Title>
          <ButtonsContainer>
            <GoodButton onIncrement={this.onIncrementGood} />
            <NeutralButton onIncrement={this.onIncrementNeutral} />
            <BadButton onIncrement={this.onIncrementBad} />
          </ButtonsContainer>
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </FeedbackContainer>
        {/* <div>
          <Phonebook onSubmit={this.formSubmitHandler} />
        </div> */}
      </div>
    );
  }
}

export default App;

// import Counter from './Counter/Counter';
// import Dropdown from './Dropdown/Dropdown';
// import ColorPicker from './Colorpicker/ColorPicker';
// import TodoList from './Todolist/TodoList';
// import initialTodos from '../todos.json';
// import Phonebook from './Phonebook/Phonebook';

// const colorPickerOptoins = [
//   { label: 'red', color: 'red' },
//   { label: 'green', color: 'green' },
//   { label: 'blue', color: 'blue' },
//   { label: 'grey', color: 'grey' },
//   { label: 'pink', color: 'pink' },
//   { label: 'indigo', color: 'indigo' },
// ];

// class App2 extends Component {
//   state = {
//     todos: initialTodos,
//   };

//   deleteTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.filter(todo => todo.id !== todoId),
//     }));
//   };

//   render() {
//     const { todos } = this.state;
//     const totalTodoCount = todos.length;
//     const completedTodosCount = todos.reduce(
//       (total, todo) => (todo.completed ? total + 1 : total),
//       0
//     );

//     return (
//       <div>
//         <Counter initialValue={10} />
//         <Dropdown />
//         <ColorPicker options={colorPickerOptoins} />

//         <div>
//           <p>Загальна кількість туду: {totalTodoCount}</p>
//           <p>Кількість виконаних туду: {completedTodosCount}</p>
//         </div>
//         <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
//       </div>
//     );
//   }
// }

// export default App2;
