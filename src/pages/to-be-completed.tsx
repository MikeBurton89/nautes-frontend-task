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
import { useQuery, gql } from "@apollo/client";

const GET_ALL_TODOS = gql`
  query GetTodos {
    allTodos {
      id
      User: User {
        id
        firstname
      }
      task
      done
      user_id
    }
  }
`;

const ToBeCompleted = () => {
  const { data, error, loading } = useQuery(GET_ALL_TODOS);

  console.table({data, error, loading})
  return (
    <Grid container width="90%" justifyItems={"center"}>
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
      <Grid item sx={{ width: "1505px", mt: "2.5rem" }}>
        <EnhancedTable />
      </Grid>
    </Grid>
  );
};

export default ToBeCompleted;
