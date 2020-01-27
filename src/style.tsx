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
  grid-row-gap: 10px;
  background: rgb(255, 255, 255, 1);
  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  color: rgba(42, 42, 42, 1);

  input {
    padding: 5px;
    border: rgba(210, 210, 210, 1) solid 1px;
  }
  span {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .first {
    grid-column: 1/3;
    grid-row: 1;
  }
  .second {
    grid-column: 1/3;
    grid-row: 2;
  }
  .third {
    grid-column: 1/2;
    grid-row: 3;
    justify-content: space-between;
    span {
      flex-direction: row;
      align-items: flex-end;
    }
  }
  .fourth {
    grid-column: 2/3;
    grid-row: 3;
  }
  .fifth {
    grid-column: 1/3;
    grid-row: 4;
  }
  .sixth {
    grid-column: 1/3;
    grid-row: 5;
    color: red;
    text-align: center;
  }
`;
