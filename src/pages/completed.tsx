import React from 'react'
import { useQuery, gql } from '@apollo/client'

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
  return (
    <div>Completed</div>
  )
}

export default Completed