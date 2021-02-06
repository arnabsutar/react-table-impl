import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  border: 2px solid green;
  
  border-top: transparent;
  border-right: transparent;

  background: transparent;

  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export default Spinner;