import React from "react";
import { styled, keyframes } from "styled-components";

const Wrapper = ({ children, animationDelay }) => {
  const fadeInAnimation = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    opacity: 0;

    animation: ${fadeInAnimation} 1s ease-in-out;
    animation-delay: ${animationDelay}s;
    animation-fill-mode: forwards;

    @media (max-width: 768px) {
      align-items: center;
      text-align: center;
    }
  `;

  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
