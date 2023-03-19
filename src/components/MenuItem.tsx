import { Box } from '@mui/material'
import React, {useState} from 'react'

const MenuItem = ({title}: {title:string}) => {
    const [selected, setSelected] = useState(false)
  return (
    <Box sx={{color: '#FFFFFF', width:'100%'}}>{title}</Box>
  )
}

export default MenuItem