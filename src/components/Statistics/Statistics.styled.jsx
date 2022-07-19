import styled from '@emotion/styled';
import { theme } from 'styles/theme';

export const StatisticsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StatisticsList = styled.ul`
  display: flex;
  width: 272px;
  flex-direction: column;
  margin-bottom: 24px;
`;
export const StatisticsItem = styled.li`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.medium};
  text-transform: capitalize;
  font-weight: 500;
`;

export const Total = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.large};
  font-weight: 500;
`;

export const Percentage = styled.p`
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.large};
  font-weight: 500;
`;

export const Value = styled.span`
  color: ${theme.colors.accent};
  font-size: ${theme.fontSizes.large};
  margin-left: 12px;
`;
