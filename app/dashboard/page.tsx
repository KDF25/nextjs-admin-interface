import { FC } from "react";
import styles from "@/app/ui/dashboard/dashboard.module.scss";
import { Card, Chart, Rightbar, Transactions } from "@/app/ui";

interface DashboardProps {}

const DashboardPage: FC<DashboardProps> = () => {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
