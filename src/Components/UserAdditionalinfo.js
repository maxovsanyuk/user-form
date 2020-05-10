import React from "react";
import styled from "styled-components";

// MATERIAL_UI
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";

// LODASH

import GoBackBtn from "./Buttons/GoBackBtn";

const AddInfoCont = styled.div`
  display: flex;
  position: fixed;
  background: rgba(110, 114, 114, 0.9);
  z-index: 10;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;

  .table-cont {
    position: absolute;
    width: 90%;
    margin: 15% 5% 5% 5%;
  }

  .err-alert {
    height: max-content;
    position: relative;
    top: 20px;
    left: 65px;
  }

  .table-row {
    border-bottom: 2px solid #999;
  }
  .table-cell {
    font-size: 18px;
  }
`;

const headerLables = [
  "Order Id",
  "Price",
  "Currency",
  "Payment method",
  "Status",
];

const UserAdditionalinfo = ({ setIsAddInfo, user }) => {
  const { addUserData } = user;

  return (
    <AddInfoCont onClick={() => setIsAddInfo(false)}>
      <GoBackBtn />
      <TableContainer
        className="table-cont"
        component={Paper}
        onClick={(e) => e.stopPropagation()}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className="table-row">
              {headerLables.map((i) => {
                return (
                  <TableCell key={i} align="center">
                    {i}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {addUserData?.included?.orders.map((user) => {
              const { id, price, currency, title, status } = user;
              const rowItems = [id, price, currency, title, status];

              return (
                <TableRow key={user.id} hover style={{ cursor: "pointer" }}>
                  {rowItems.map((item) => {
                    return (
                      <TableCell
                        className="table-cell"
                        key={item}
                        align="center"
                      >
                        {item}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {!addUserData.included.orders.length && (
        <Alert className="err-alert" severity="error">
          User has no orders
        </Alert>
      )}
    </AddInfoCont>
  );
};

export default UserAdditionalinfo;
