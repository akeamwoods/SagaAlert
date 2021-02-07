import styled from "styled-components";

const AlertBox = styled.div`
  position: absolute;
  top: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const AlertBoxLeft = styled(AlertBox)`
  align-items: flex-start;
  left: 0;
`;
export const AlertBoxRight = styled(AlertBox)`
  align-items: flex-end;
  right: 0;
`;
