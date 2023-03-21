import React, { useState, useEffect } from "react";
import {
  FormControl,
  Grid,
  Select,
  Typography,
  InputLabel,
  MenuItem,
} from "@mui/material";
import TaskTable from "@/components/TaskTable";

const TaskManagementComponent = ({ fetchedData, completed, title }) => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    setTodos(fetchedData);
    return () => {
      setTodos([]);
    };
  }, [fetchedData]);

  useEffect(() => {
    const results = todos.filter((todo) =>
      todo.User.firstname.toLowerCase().includes(search.toLowerCase())
    );
    setResults(results);
    return () => setResults([]);
  }, [search, todos]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value as string);
    console.log(search);
  };

  return (
    <>
      <Grid item xs={12} sx={{ width: "20em", height: "53px" }}>
        <Typography color="#2A3948" variant="h6">
          {title}
        </Typography>
        <FormControl fullWidth>
          <InputLabel id="operatore-select-label">
            Filtra per operatore
          </InputLabel>
          <Select
            onChange={(e) => handleChange(e)}
            labelId="operatore-select-label"
            id="operatore-select"
            defaultValue={""}
            value={search}
            sx={{ bgcolor: "#FFFFFF" }}
            placeholder="Filtra per operatore"
          >
            {todos.map((todo) => (
              <MenuItem key={todo.id} value={todo.User.firstname}>
                {todo.User.firstname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={{ width: "20em", mt: "2.5rem" }}>
        <TaskTable completed={completed} fetchedData={results} />
      </Grid>
    </>
  );
};

export default TaskManagementComponent;
