import { Box, Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";

const MenuItem = ({ title, href }: { title: string; href: string }) => {
  const [selected, setSelected] = useState(false);
  return (
    <Box onClick={()=>setSelected(true)} sx={{ color: "#FFFFFF", width: "100%", heigth:'73px'  }}>
      <Button sx={{textTransform: 'capitalize !important', backgroundColor: selected === true ? '#000000' : 'transparent'}} color={'inherit'} role={Link} href={href}>
        {title}
      </Button>
    </Box>
  );
};

export default MenuItem;
