import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 5px;
  background: rgb(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 5px;
  input {
    padding: 5px;
  }
`;
