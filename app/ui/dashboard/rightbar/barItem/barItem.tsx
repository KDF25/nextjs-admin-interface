import { FC } from "react";
import styles from "./barItem.module.scss";
import { IBarItem } from "@/app/types";
import astronaut from "@/public/astronaut.png";
import Image from "next/image";
import { MdPlayCircleFilled } from "react-icons/md";

interface BarItemProps {
  item: IBarItem;
}

export const BarItem: FC<BarItemProps> = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bgContainer}>
        <Image
          className={styles.bg}
          src={astronaut}
          width={100}
          height={100}
          alt="astronaut"
        />
      </div>
      <div className={styles.text}>
        <span className={styles.notification}>{item.notification}</span>
        <h3 className={styles.title}>{item.title}</h3>
        <span className={styles.subtitle}>{item.subtitle}</span>
        <p className={styles.desc}>{item.description}</p>
        <button className={styles.button}>
          <MdPlayCircleFilled />
          <p>{item.button}</p>
        </button>
      </div>
    </div>
  );
};
