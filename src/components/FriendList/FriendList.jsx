import { FriendUl, FriendItem } from "./FriendsList.styled";

export const FriendList = ({ friends }) => {
    return <FriendUl>
        {friends.map(friend => (
            <FriendItem key={friend.id}>
            <span>{friend.isOnline}</span>
            <img 
            src={friend.avatar} 
            alt={friend.name} 
            width="48" 
            />
            <p>{friend.name}</p>
          </FriendItem>
        ))}
  </FriendUl>
};