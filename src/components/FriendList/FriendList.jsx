import { FriendUl, FriendItem, FriendStatus, FriendImg, FriendParagraph } from "./FriendsList.styled";

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