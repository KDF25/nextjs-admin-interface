import { FC } from "react";
import styles from "./footer.module.scss";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.logo}>Karimov Dev</p>
      <p className={styles.rights}>All rights reserved.</p>
    </div>
  );
};
