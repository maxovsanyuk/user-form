import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const BtnBox = styled.div`
  .go-back-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #5e9ab4;
    color: aliceblue;
    font-weight: 600;
    &:hover {
      color: #5e9ab4;
      background: #d5d5d5;
    }
  }
`;

const GoBackBtn = ({ style }) => {
  return (
    <BtnBox>
      <Button className="go-back-btn" style={style} variant="contained">
        Go back
      </Button>
    </BtnBox>
  );
};

export default GoBackBtn;
