import { Card, Chart, Rightbar, Transactions } from "@/app/ui";
import styles from "@/app/ui/dashboard/dashboard.module.scss";
import { FC } from "react";

const DashboardPage: FC = () => {
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
