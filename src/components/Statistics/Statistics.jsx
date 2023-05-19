import { 
    TitleStatistic, 
    SectionStatistic, 
    UlStatistic,
    ListItemStatistic
 } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return <SectionStatistic>
    <TitleStatistic>{title}</TitleStatistic>
  
    <UlStatistic>
        {stats.map(stat => (
            <ListItemStatistic>
            <span>{stat.label}</span>
            <span>{stat.percentage}%</span>
            </ListItemStatistic>
        ))}
    </UlStatistic>
  </SectionStatistic>
};