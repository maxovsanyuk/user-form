import React from "react";
import styled from "styled-components";

const StatusLineCont = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  background: #fff;
  box-shadow: inset 0px -1px 0px #e7e9f0;

  .status-line {
    width: ${({ width }) => `${width}%`};
    position: absolute;
    bottom: -4px;
    left: 0;
    height: 4px;
    background: #61ad15;
    transition: 1s;
  }
`;

const StatusLine = ({ width }) => {
  return (
    <StatusLineCont width={width}>
      <div className="status-line" />
    </StatusLineCont>
  );
};

export default StatusLine;
