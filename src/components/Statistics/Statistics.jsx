import PropTypes from 'prop-types';
import { 
    TitleStatistic, 
    SectionStatistic, 
    UlStatistic,
    ListItemStatistic,
    Label
 } from './Statistics.styled';

 function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

export const Statistics = ({ title, stats }) => {
    return <SectionStatistic>
     {title && <TitleStatistic>{title}</TitleStatistic>}
  
    <UlStatistic>
        {stats.map(stat => (
            <ListItemStatistic style={{
                backgroundColor: getRandomHexColor(),
              }} key={stat.id}>
            <Label>{stat.label}</Label>
            <span>{stat.percentage}%</span>
            </ListItemStatistic>
        ))}
    </UlStatistic>
  </SectionStatistic>
};

Statistics.propTypes = {
    title: PropTypes.string, 
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired, 
            percentage: PropTypes.number.isRequired 
        })
    ).isRequired 
};