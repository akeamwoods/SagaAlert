import styled from "styled-components";
import { animated } from "react-spring";

const AlertBox = styled.div`
  position: absolute;
  top: 0;
  padding: 0;
  margin: 5px;
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

export const AlertWrapper = styled(animated.div)`
  margin-bottom: 5px;
  z-index: 2;
`;
