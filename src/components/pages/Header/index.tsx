import NextLink from "next/link";
import React from "react";

import styles from "@/components/pages/Header/index.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NextLink className={styles.siteTitle} href="/">
          都道府県別人口推移グラフ
        </NextLink>
      </div>
    </header>
  );
};
