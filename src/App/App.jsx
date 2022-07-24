import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Container } from './App.styled';
import { useState } from 'react';

export const App = () => {
  const [good, setName] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onChange = key => {
    switch (key) {
      case 'good':
        return setName(prevGood => prevGood + 1);
      case 'neutral':
        return setNeutral(prevNeutral => prevNeutral + 1);
      case 'bad':
        return setBad(prevBad => prevBad + 1);

      default:
        break;
    }
  };

  const getStateObject = () => {
    return { good, neutral, bad };
  };

  const state = getStateObject();

  const stateKeys = Object.keys(state);

  const stateDataArray = Object.entries(state);

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions stateKeys={stateKeys} onLeaveFeedback={onChange} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          stateDataArray={stateDataArray}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      </Section>
    </Container>
  );
};
