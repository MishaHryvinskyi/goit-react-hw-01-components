import PropTypes from 'prop-types';
import { FcLike, FcFilm, FcReading } from 'react-icons/fc';
import { 
  Card, 
  User, 
  UserImg, 
  UserName, 
  UserTag,
  UserLocation,
  Info,
  InfoItem,
  Title,
  Value 
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return <Card>
  <User>
    <UserImg
      src={avatar}
      alt={username}
      width="200"
    />
    <UserName>{username}</UserName>
    <UserTag>@{tag}</UserTag>
    <UserLocation>{location}</UserLocation>
  </User>

  <Info>
    <InfoItem>
      <Title>Followers</Title>
      <Value><FcReading/>{stats.followers}</Value>
    </InfoItem>
    <InfoItem>
      <Title>Views</Title>
      <Value><FcFilm/>{stats.views}</Value>
    </InfoItem>
    <InfoItem>
      <Title>Likes</Title>
      <Value><FcLike/>{stats.likes}</Value>
    </InfoItem>
  </Info>
</Card>;
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
};


