import React from "react";
import styles from "./Layout.module.css";
import logo from "../../public/Raggruppa 9035.png";
import Image from "next/image";
import ResponsiveAppBar from "./AppBar";
import MenuItem from "./MenuItem";

import { Box, Grid } from "@mui/material";
const options = [{title:'Attivitá da completare', href: 'to-be-completed'},{title:'Attivitá completate', href: 'completed'}]

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.layout}>
      <nav className={styles.header}>
        <ResponsiveAppBar />
      </nav>
      <section className={styles.main}>
        <section className={styles["inner-layout"]}>
          <div className={styles.sidebar}>
            <Box sx={{mt:'35px'}}>
            {options.map((option, idx)=> <MenuItem key={idx} index={idx} href={option.href} title={option.title}/> )}
            </Box>
          </div>
          <div className={styles.body}><Grid height={'100%'} mt='2rem' container justifyContent={'center'} alignItems={'start'}>{children}</Grid></div>
        </section>
      </section>
    </main>
  );
};

export default Layout;
