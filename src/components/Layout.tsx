import React from "react";
import styles from "./Layout.module.css";
import logo from "../../public/Raggruppa 9035.png";
import Image from "next/image";
import ResponsiveAppBar from "./AppBar";
import MenuItem from "./MenuItem";

const options = ['Attivitá da completare',' Attivitá completate']

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.layout}>
      <nav className={styles.header}>
        <ResponsiveAppBar />
      </nav>
      <section className={styles.main}>
        <section className={styles["inner-layout"]}>
          <div className={styles.sidebar}>
            {options.map((option, idx)=> <MenuItem key={idx} title={option}/> )}
          </div>
          <div className={styles.body}>{children}</div>
        </section>
      </section>
    </main>
  );
};

export default Layout;
