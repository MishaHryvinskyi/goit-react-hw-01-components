import styled from "@emotion/styled";

export const TableHistory = styled.table`
  width: 800px;
  border-collapse: collapse;
  margin: 0 auto;
  margin-bottom: 50px;
  box-shadow: 0px 14px 11px -8px rgba(0,0,0,0.61);
`;

export const Thead = styled.thead`
  background-color: skyblue;
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid grey;
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid grey;
  text-align: center;
`;

export const Tr = styled.tr`
  &:nth-of-type(even) {
    background-color: lightgray;
  }
`;