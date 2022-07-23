import PropTypes from 'prop-types';
import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKeys = Object.keys(options);

  return (
    <ButtonBox>
      {optionsKeys.map(key => (
        <Button type="button" key={key} onClick={() => onLeaveFeedback(key)}>
          {key}
        </Button>
      ))}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
