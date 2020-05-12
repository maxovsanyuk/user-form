import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import svg404 from "../../img/404.gif";
import GoBackBtn from "../ButtonsComponents/GobackBtn";

const Component404 = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #fff url(${svg404}) no-repeat center;
  background-size: 40%;

  .go-back-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #5e9ab4;
    color: aliceblue;
    font-weight: 600;
    &:hover {
      color: #5e9ab4;
    }
  }
`;

const ERR404 = () => {
  return (
    <Component404>
      <Link to="/user-form">
        <GoBackBtn />
      </Link>
    </Component404>
  );
};

export default ERR404;
