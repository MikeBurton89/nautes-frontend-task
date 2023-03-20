import React from "react";
import { CircularProgress } from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import TaskManagementComponent from "@/components/TaskManagementComponent";

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
    <TaskManagementComponent completed={false} fetchedData={data?.allTodos} />
  );
};

export default ToBeCompleted;
