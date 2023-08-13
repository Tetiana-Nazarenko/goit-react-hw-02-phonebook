import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-top: 20px;
  margin-bottom: 20px;
`;
export const LabelTitle = styled.label`
  font-size: 24px;
  font-weight: 700;
`;
export const Input = styled.input`
  margin: 10px;
  padding: 10px;
  width: 640px;
  color: blue;
  font-weight: 600;
  font-size: 16px;
`;

export const ButtonAddContact = styled.button`
  padding: 15px 15px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 22px;
  color: white;
  background-color: blue;
  border-radius: 10px;
  border: none;
  width: 50%;
  cursor: pointer;
`;
