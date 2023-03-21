import React from "react";
import { CircularProgress, Grid } from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import TaskManagementComponent from "@/components/TaskManagementComponent";
import AddTodo from "@/components/AddTodo";

const GET_ALL_TODOS = gql`
  query GetTodos {
    allTodos(filter: { done: false }) {
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

  console.table({ data, error, loading });
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Grid container width="90%" justifyItems={"center"}>
        <TaskManagementComponent
        title='Attivitá da completare'
          completed={false}
          fetchedData={data?.allTodos}
        />
        <AddTodo></AddTodo>
      </Grid>
    </>
  );
};

export default ToBeCompleted;
