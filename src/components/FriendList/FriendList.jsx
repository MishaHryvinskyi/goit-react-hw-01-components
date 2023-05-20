import { 
  FriendUl, 
  FriendItem, 
  FriendStatus, 
  FriendImg, 
  FriendParagraph 
} from "./FriendsList.styled";
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return <FriendUl>
        {friends.map(friend => (
            <FriendItem key={friend.id}>
           <FriendStatus isOnline={Boolean(friend.isOnline)} />
            <FriendImg 
            src={friend.avatar} 
            alt={friend.name} 
            width="62" 
            />
            <FriendParagraph>{friend.name}</FriendParagraph>
          </FriendItem>
        ))}
  </FriendUl>
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired
    })
  ).isRequired
};