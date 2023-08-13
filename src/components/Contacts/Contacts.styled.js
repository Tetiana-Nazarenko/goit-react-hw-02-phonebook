import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  color: blue;
  font-size: 26px;
  font-weight: 500;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
`;
export const DeleteButton = styled.button`
  padding: 10px 10px;
  margin-left: 20px;

  font-weight: 600;
  color: white;
  background-color: blue;
  border-radius: 7px;
  border: none;

  cursor: pointer;
`;
