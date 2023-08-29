import React from "react";
import styles from "./navbar.module.scss";
import { navLinks } from "./links";
import Logo from "../../assets/Inverse Logo.svg";

export default function Navbar() {
   return (
      <div className={styles.container}>
         <a href="/">
            <img src={Logo} height="50px" />
         </a>
      </div>
   );
}
