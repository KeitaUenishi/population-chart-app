import React from "react";

import styles from "@/components/pages/Layout/index.module.css";
import { Header } from "@/components/pages/Header";
import { MetaTag } from "@/components/pages/MetaTag";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MetaTag />
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

export default Layout;