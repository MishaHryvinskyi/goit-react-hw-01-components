import styled from "@emotion/styled";

export const FriendUl = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FriendItem = styled.li`
    padding: 30px;
    display: flex; 
    align-items: center;
    width: 200px;
    border: solid 2px white;
    justify-content: space-between;
    margin-bottom: 20px;
    background-color: skyblue;
    border-radius: 8px;
    box-shadow: 0px 14px 11px -8px rgba(0,0,0,0.61);
`;

export const FriendStatus = styled.span`
    height: 10px;
    width: 10px;
    border-radius: 50%;
    display: flex;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendImg = styled.img`
    border-radius: 40%;
    padding: 20px;
    border: solid 3px white;
    background-color: grey;
`; 

export const FriendParagraph = styled.p`
    font-size: 18px;
    font-weight: 600;
`;