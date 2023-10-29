import NextLink from "next/link";
import React from "react";

import styles from "@/components/pages/Header/index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NextLink className={styles.siteTitle} href="/">
          App
        </NextLink>
      </div>
    </header>
  );
};
