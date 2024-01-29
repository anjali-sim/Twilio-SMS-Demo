import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: auto;
  margin-top: 100px;
`;

export const Input = styled.input`
  margin: 8px 0;
  padding: 8px;
  font-size: 14px;
`;

export const Textarea = styled.textarea`
  margin: 8px 0;
  padding: 8px;
  font-size: 14px;
  min-height: 100px;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  cursor: pointer;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
`;

export default {
  Container,
  Input,
  Textarea,
  Button,
};
