import React from "react";

import { Header } from "@/components/pages/Header";
import styles from "@/components/pages/Layout/index.module.css";
import { MetaTag } from "@/components/pages/MetaTag";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <MetaTag />
      <Header />
      <main className={styles.container}>{children}</main>
    </>
  );
};

export default Layout;
