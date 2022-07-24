import PropTypes from 'prop-types';
import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ stateKeys, onLeaveFeedback }) => {
  return (
    <ButtonBox>
      {stateKeys.map(key => (
        <Button type="button" key={key} onClick={() => onLeaveFeedback(key)}>
          {key}
        </Button>
      ))}
    </ButtonBox>
  );
};

FeedbackOptions.propTypes = {
  stateKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
