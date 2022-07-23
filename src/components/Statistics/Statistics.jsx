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

export const Statistics = ({ options, total, positivePercentage }) => {
  const getDataArray = Object.entries(options);

  return total() ? (
    <StatisticsBox>
      <StatisticsList>
        {getDataArray.map((item, index) => (
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
  options: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
