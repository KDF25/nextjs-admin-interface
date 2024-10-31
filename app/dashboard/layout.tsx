import { FC, ReactNode } from "react";
import styles from "../ui/dashboard/dashboard.module.scss";
import { Footer, Navbar, Sidebar } from "@/app/ui";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
