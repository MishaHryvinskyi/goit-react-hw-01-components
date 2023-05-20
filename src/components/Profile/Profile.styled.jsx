import styled from "@emotion/styled";

export const Card = styled.div`
    max-width: 400;
    margin: 0 auto;
    border-radius: 10px;
    padding: 40px;
    background-color: skyblue;
    display: flex;
    flex-direction: column;
    text-align: center;
    box-shadow: 0px 14px 11px -8px rgba(0,0,0,0.61);
`;

export const User = styled.div`
    margin: 0 auto;
    max-width: 400;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin-bottom: 40px;
`;

export const UserImg = styled.img`
    border: solid 5px white;
    border-radius: 40%;
    background-color: grey;
    margin-bottom: 12px;
    box-shadow: 0px 14px 11px -8px rgba(0,0,0,0.61);
`;

export const UserName = styled.p`
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: 600;
`;

export const UserTag = styled.p`
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 500;
    color: grey;
`;

export const UserLocation = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: grey;
`;

export const Info = styled.ul`
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    box-shadow: 0px 14px 11px -8px rgba(0,0,0,0.61);
`;

export const InfoItem = styled.li`
    display: flex;
    flex-direction: column;
    width: 65px;
    padding: 20px;
    border: solid 2px white;
    background-color: pink;
`;

export const Title = styled.span`
    margin-bottom: 8px;
    color: grey;
`;

export const Value = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: black;
`;