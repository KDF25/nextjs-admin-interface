import { IUser } from "@/app/types";
import avatar from "@/public/noavatar.png";
import Image from "next/image";
import { FC } from "react";
import styles from "./userItem.module.scss";

interface UserItemProps {
  user: IUser;
}

export const UserItem: FC<UserItemProps> = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>
        <Image
          src={avatar}
          alt="user"
          width={40}
          height={40}
          className={styles.image}
        />
        <p>{user.name}</p>
      </div>
      <span>{user.email}</span>
      <span>{user.createdAt}</span>
      <span>{user.role}</span>
      <span>{user.status}</span>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.view}`}>
            View
        </button>
        <button className={`${styles.button} ${styles.delete}`}>
            Delete
        </button>
      </div>
    </div>
  );
};
