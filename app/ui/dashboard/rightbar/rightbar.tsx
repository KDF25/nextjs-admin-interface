import { FC } from "react";
import styles from "./rightbar.module.scss";
import { BarItem } from "./barItem";
import { rightBarItems } from "@/app/config";

interface RightbarProps {}

export const Rightbar: FC<RightbarProps> = () => {
  return (
    <div className={styles.wrapper}>
      {rightBarItems.map((item, index) => (
        <BarItem key={index} item={item} />
      ))}
    </div>
  );
};
