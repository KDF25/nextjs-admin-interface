import { FC } from "react";
import styles from "./pagination.module.scss";

interface PaginationProps {}

export const Pagination: FC<PaginationProps> = () => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.prev}>Prev</button>
      <button className={styles.next}>Next</button>
    </div>
  );
};
