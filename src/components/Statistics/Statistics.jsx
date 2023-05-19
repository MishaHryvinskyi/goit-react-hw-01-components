import PropTypes from 'prop-types';
import { 
    TitleStatistic, 
    SectionStatistic, 
    UlStatistic,
    ListItemStatistic,
    Label
 } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return <SectionStatistic>
    <TitleStatistic>{title}</TitleStatistic>
  
    <UlStatistic>
        {stats.map(stat => (
            <ListItemStatistic key={stat.id}>
            <Label>{stat.label}</Label>
            <span>{stat.percentage}%</span>
            </ListItemStatistic>
        ))}
    </UlStatistic>
  </SectionStatistic>
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired, 
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired, 
            percentage: PropTypes.number.isRequired 
        })
    ).isRequired 
};