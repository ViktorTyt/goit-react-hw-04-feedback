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
