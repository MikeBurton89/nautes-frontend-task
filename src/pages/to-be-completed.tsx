import React from "react";
import {
  FormControl,
  Grid,
  Select,
  Typography,
  MenuItem,
  InputLabel,
} from "@mui/material";
import EnhancedTable from "@/components/TaskTable";

const ToBeCompleted = () => {
  return (
    <Grid container width="90%" justifyItems={"center"} >
      <Grid item sx={{ width: "1505px", height: "53px" }}>
        <Typography color="#2A3948" variant="h6">
          Attivitá da completare
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="operatore-select-label" shrink={false}>
            Filtra per operatore
          </InputLabel>
          <Select
            labelId="operatore-select-label"
            id="operatore-select"
            sx={{ bgcolor: "#FFFFFF" }}
            placeholder="Filtra per operatore"
          />
        </FormControl>
      </Grid>
      <Grid item sx={{ width: "1505px", mt: '2.5rem' }}> 
        <EnhancedTable />
      </Grid>
    </Grid>
  );
};

export default ToBeCompleted;
