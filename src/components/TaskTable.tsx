import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button } from "@mui/material";

import { useMutation, gql } from "@apollo/client";
import { GET_ALL_TODOS } from "@/pages/to-be-completed";
import { GET_DONE_TODOS } from "@/pages/completed";

const UPDATE_TO_DO = gql `mutation UpdateTodo($id: ID!, $done: Boolean) {
  updateTodo(
    id: $id,
    done: $done
  ) {
    id
    done
  }
}` 

const RenderDoneButton = ({id}) => {
    const [updateTodo, {data,loading, error}] = useMutation(UPDATE_TO_DO, {
      refetchQueries: [{query: GET_ALL_TODOS}, {query: GET_DONE_TODOS }],
    })

    const handleDoneClick = () => {
      updateTodo({ variables: { id, done: true } });
    };
  
  return (
      <Button
      onClick={handleDoneClick}
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
      renderCell: completed ? null : (params)=> <RenderDoneButton id={params.row.id}/>,
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
