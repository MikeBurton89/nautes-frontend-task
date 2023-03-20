import { DataGrid } from "@mui/x-data-grid";

import React from "react";
import { Box, Button } from "@mui/material";

const renderDoneButton = (params) => {
  return (
    <strong>
      <Button
        variant="contained"
        color="primary"
        size="small"
        style={{ marginLeft: 16 }}
      >
        Svolgi
      </Button>
    </strong>
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
      renderCell: completed ? null : (params) => renderDoneButton(params.row),
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
