import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchListOfUsers, setOffset } from "../Redux/actionsCreators";
import { useParams } from "react-router";
import styled from "styled-components";

// MATERIAL_UI
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";
import Alert from "@material-ui/lab/Alert";
import Pagination from "@material-ui/lab/Pagination";
import Button from "@material-ui/core/Button";
import Skeleton from "@material-ui/lab/Skeleton";
import { withStyles } from "@material-ui/core/styles";

// LODASH
import isEmpty from "lodash/isEmpty";
import range from "lodash/range";
import { Link } from "react-router-dom";
import UserAdditionalinfo from "./UserAdditionalinfo";

var moment = require("moment");

const ColorLinearProgress = withStyles({
  colorPrimary: {
    backgroundColor: "#b2dfdb",
  },
  barColorPrimary: {
    backgroundColor: "#00695c",
  },
})(LinearProgress);

const WrapperComp = styled.div`
  width: 90%;
  position: relative;
  margin: 100px auto;
  opacity: 0.85;

  .table-row {
    border-bottom: 2px solid #999;
  }

  .table-cell {
    font-size: 18px;
  }

  .add-info-btn {
    background: #5e9ab4;
    color: aliceblue;
  }

  .linear-progress {
    width: 100%;
    position: absolute;
    bottom: 60px;
    z-index: 1;
  }

  .pagination {
    display: flex;
    justify-content: center;
    margin: 30px auto;
    width: 50%;
  }
`;

const headerLables = [
  "#",
  "Name",
  "Messenger",
  "Time of last message",
  "Additional information",
];

const UsersTable = () => {
  const dispatch = useDispatch();
  const [isAddInfo, setIsAddInfo] = useState(false);
  const [userToShowAddInfo, setUserToShowAddInfo] = useState(false);
  const state = useSelector((state) => state.app);
  const { usersData, limit, token, isloading, offset, offsetLimit } = state;
  const { page: routerPage = 1 } = useParams();

  const handleChangeOffset = (e, value) => {
    dispatch(setOffset(Math.abs(value)));
  };

  const handleAddInfo = (user) => {
    setUserToShowAddInfo(user);
    setIsAddInfo(!isAddInfo);
    document.body.style.overflow = "hidden";
  };

  useEffect(() => {
    dispatch(
      fetchListOfUsers({
        limit,
        offset,
        token,
      })
    );
  }, [offset]);

  useEffect(() => {
    dispatch(setOffset(Math.abs(parseInt(routerPage))));
  }, [routerPage]);

  return (
    <WrapperComp>
      {isAddInfo && (
        <UserAdditionalinfo
          user={userToShowAddInfo}
          setIsAddInfo={setIsAddInfo}
        />
      )}

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className="table-row">
              {headerLables.map((i) => {
                return (
                  <TableCell key={i} align="center" className="table-cell">
                    {i}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {!isEmpty(usersData)
              ? usersData.map((user, i) => (
                  <TableRow key={user.id} hover style={{ cursor: "pointer" }}>
                    <TableCell align="center">{i + 1}</TableCell>
                    <TableCell align="center">{user.name}</TableCell>
                    <TableCell align="center">{user.from}</TableCell>
                    <TableCell align="center">
                      {moment(user.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        className="add-info-btn"
                        onClick={() => handleAddInfo(user)}
                      >
                        Get additional information
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              : range(1, limit + 1, 1).map((i) => {
                  return (
                    <TableRow key={i}>
                      {range(1, 6, 1).map((i) => {
                        return (
                          <TableCell key={i}>
                            <Skeleton animation="wave" height={36} />
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>

        {isloading && <ColorLinearProgress className="linear-progress " />}

        {!isloading && usersData && isEmpty(usersData) && (
          <Alert severity="error">No users datas, comming soon</Alert>
        )}
      </TableContainer>

      <Link style={{ textDecoration: "none" }} to={`/LeeLoo/page/${offset}`} target>
        <Pagination
          className="pagination"
          count={offset > offsetLimit ? routerPage : offsetLimit}
          page={offset}
          onChange={handleChangeOffset}
        />
      </Link>
    </WrapperComp>
  );
};

export default UsersTable;
