import React from 'react'
import { useQuery, gql } from '@apollo/client'
import TaskManagementComponent from "@/components/TaskManagementComponent";
import { CircularProgress, Grid } from "@mui/material";

const GET_DONE_TODOS = gql `query GetTodos {
  allTodos(filter:{done:true}) {
    id
    User: User {
      id
      firstname
    }
    task
    done
    user_id
  }
}`

const Completed = () => {
  const {data,error, loading} = useQuery(GET_DONE_TODOS)
  console.table({ data, error, loading });
  if (loading) {
    return <CircularProgress />;
  }
  return (
    <Grid container width="90%" justifyItems={"center"}>
      <TaskManagementComponent title='Attivitá completate' completed fetchedData={data?.allTodos} />
    </Grid>
    
  );
}

export default Completed