import React, {useState} from "react";
import {
  Grid,
  Box,
  TextField,
  FormControl,
  Select,
  Button,
} from "@mui/material";

const AddTodo = () => {
  const [task, setTask] = useState<string>('')
  return (
    <Grid item xs={12}>
      <Box
        height={"fit-content"}
        sx={{
          backgroundColor: "#CFD8E0",
          padding: "1rem",
          mt: "1rem",
          borderRadius: "4px",
        }}
      >
        <FormControl sx={{ width: "100%" }}>
          <Grid
            container
            spacing={1}
            alignItems={"center"}
            justifyItems={"center"}
            width={"100%"}
          >
            <Grid item xs={6}>
              <TextField fullWidth value={task} onInput={(e)=> setTask(event?.target.value)}></TextField>
            </Grid>
            <Grid item xs={6}>
              <Select fullWidth></Select>
            </Grid>
            <Grid item xs={3}>
              <Button>Invia</Button>
            </Grid>
          </Grid>
        </FormControl>
      </Box>
    </Grid>
  );
};

export default AddTodo;
