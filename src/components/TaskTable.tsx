import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

import { useMutation, gql } from "@apollo/client";

const UPDATE_TO_DO = gql `mutation UpdateToDo($ID: ID!, $done: Boolean) {
    updateTodo(id: $ID, done:$done) {
      id
      done
    }
  }` 

const RenderDoneButton = (params) => {
    const [updateTodo, {data,loading, error}] = useMutation(UPDATE_TO_DO)
  return (
      <Button
        variant="contained"
        color="inherit"
        size="medium"
        sx={{ marginLeft: 16, backgroundColor:'#2A3948', color: '#FAFBFC' }}
      >
        Svolgi
      </Button>
  );
};

const TaskTable = ({ fetchedData, completed }) => {
  const columns = [
    {
      field: "task",
      headerName: "Attività",
      minWidth: 300,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "firstname",
      headerName: "Operatore",
      minWidth: 150,
      headerClassName: "super-app-theme--header",
    },
    {
      field: "complete",
      headerName: "",
      flex:1,
      headerClassName: "super-app-theme--header",
      minWidth: 150,
      align:'right',
      renderCell: completed ? null : (params) => RenderDoneButton(params.row),
    },
  ];

  const rows = fetchedData?.map((element) => {
    return {
      id: element.id,
      task: element.task,
      firstname: element.User.firstname,
    };
  });
  return (
    <Box
      sx={{
        height: "300px",
        minWidth: "1000px",
        "& .super-app-theme--header": {
          backgroundColor: "#BE0010",
        },
      }}
    >
      <DataGrid
        sx={{
          backgroundColor: "#FFFFFF",
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "&.MuiDataGrid-root": {
            border: "none",
          },
        }}
        rows={rows}
        columns={columns}
        hideFooter
      />
    </Box>
  );
};

export default TaskTable;
