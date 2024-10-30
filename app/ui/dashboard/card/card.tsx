import { FC } from "react";
import styles from "./card.module.scss";
import { MdSupervisedUserCircle } from "react-icons/md";

interface CardProps {}

export const Card: FC<CardProps> = () => {
  return (
    <div className={styles.wrapper}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.text}>
        <p className={styles.title}>Total Users</p>
        <span className={styles.number}>10.273</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span>
          more than previous week
        </span>
      </div>
    </div>
  );
};
