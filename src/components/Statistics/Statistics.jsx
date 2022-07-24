import PropTypes from 'prop-types';
import {
  StatisticsBox,
  StatisticsList,
  StatisticsItem,
  Total,
  Percentage,
  Value,
} from './Statistics.styled';
import { Notification } from 'components/Notification/Notification';

export const Statistics = ({ stateDataArray, total, positivePercentage }) => {
  return total() ? (
    <StatisticsBox>
      <StatisticsList>
        {stateDataArray.map((item, index) => (
          <StatisticsItem key={index + 1}>
            {item[0]}:<Value>{item[1]}</Value>
          </StatisticsItem>
        ))}
      </StatisticsList>
      <Total>
        Total:<Value>{total()}</Value>
      </Total>
      <Percentage>
        Positive feedback:<Value>{total() && positivePercentage()} %</Value>
      </Percentage>
    </StatisticsBox>
  ) : (
    <Notification message={'There is no feedback'} />
  );
};

Statistics.propTypes = {
  stateDataArray: PropTypes.arrayOf(PropTypes.array).isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
