import React from "react";
import Alert from "@material-ui/lab/Alert";
import styled from "styled-components";

const TotalValueAlert = styled.div`
  .success {
    width: 335px;
    position: absolute;
    bottom: -65px;
    left: 40px;
    padding: 15px;
    animation: success 0.3s linear normal forwards;
  }

  @keyframes success {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const TotalValueComp = ({ value }) => {
  return (
    <TotalValueAlert>
      <Alert className="success" severity="success">
        Total value is <b>{value}</b>
      </Alert>
    </TotalValueAlert>
  );
};

export default TotalValueComp;
