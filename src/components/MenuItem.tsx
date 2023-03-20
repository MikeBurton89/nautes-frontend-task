import { Box, Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const MenuItem = ({ title, href, index }: { title: string; href: string }) => {
  const [selected, setSelected] = useState(false);

  const handleSelected =(event, id)=>{
    event.preventDefault()
    console.log(event)
    if(id=== index){
        setSelected(true)
    }
  }
  return (
    <Box
    onClick={(event, id) => handleSelected(event, id)}
      sx={{ color: "#FFFFFF", width: "100%", heigth: "73px" }}
    >
      <Button
        sx={{
          textTransform: "capitalize !important",
          backgroundColor: selected === true ? "#000000" : "transparent",
          height: "100%",
        }}
        color={"inherit"}
        component={Link}
        href={href}
      >
        {title}
      </Button>
    </Box>
  );
};

export default MenuItem;
