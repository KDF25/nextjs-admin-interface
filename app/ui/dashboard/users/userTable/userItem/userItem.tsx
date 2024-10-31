import { roles, status } from "@/app/config";
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
          src={user.img || avatar}
          alt="user"
          width={40}
          height={40}
          className={styles.image}
        />
        <p>{user.username}</p>
      </div>
      <span>{user.email}</span>
      <span>{new Date(user.createdAt).toLocaleDateString()}</span>
      <span>{user.isAdmin ? roles.admin : roles.client}</span>
      <span>{user.isActive ? status.active : status.inactive}</span>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.view}`}>View</button>
        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
      </div>
    </div>
  );
};
