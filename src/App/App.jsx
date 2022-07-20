import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Container } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onChange = key => {
    setState(prevState => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };
  console.log(state);
  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return ((state.good / countTotalFeedback()) * 100).toFixed(0);
  };

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions options={state} onLeaveFeedback={onChange} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          options={state}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </Container>
  );
};

// Class App
// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onChange = key => {
//     this.setState(prevState => {
//       return { [key]: prevState[key] + 1 };
//     });
//   };

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce((acc, value) => acc + value, 0);
//   };

//   countPositiveFeedbackPercentage = () => {
//     return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
//   };

//   render() {
//     return (
//       <Container>
//         <Section title={'Please leave feedback'}>
//           <FeedbackOptions
//             options={this.state}
//             onLeaveFeedback={this.onChange}
//           />
//         </Section>
//         <Section title={'Statistics'}>
//           <Statistics
//             options={this.state}
//             total={this.countTotalFeedback}
//             positivePercentage={this.countPositiveFeedbackPercentage}
//           />
//         </Section>
//       </Container>
//     );
//   }
// }
