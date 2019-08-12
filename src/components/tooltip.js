import React from 'react';
import styled from 'styled-components';

const TooltipWrapper = styled.div`
  position: absolute;
  bottom: 15px;
  background: rgba(255, 0, 0, 0.5);

  width: 300px;
  height: 100px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateY(-5px);
  transition: all 0.2s;
`;

const Message = styled.span`
  color: #fff;
`;

const CloseButton = styled.button`
  text-transform: uppercase;
  color: #333;
  cursor: pointer;
  border: 0;
  background: none;
  margin-top: 20px;
`;

const Tooltip = ({ error, close }) => {
  return (
    <TooltipWrapper>
      <Message>Error: {error}</Message>
      <CloseButton onClick={close}>Close</CloseButton>
    </TooltipWrapper>
  );
};

export default Tooltip;
