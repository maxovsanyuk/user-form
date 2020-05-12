import React from "react";
import Alert from "@material-ui/lab/Alert";
import styled from "styled-components";

const ErrComp = styled.div`
  position: absolute;
  .alert {
    width: 220px;
    position: absolute;
    top: 100px;
    animation: alert 0.2s linear normal forwards;
  }

  @keyframes alert {
    0% {
      left: -100px;
      z-index: -1;
    }
    100% {
      left: 40px;
      z-index: 1;
    }
  }
`;

const Error = () => {
  return (
    <ErrComp>
      <Alert className="alert" severity="warning">
        Please fill required field!
      </Alert>
    </ErrComp>
  );
};

export default Error;
