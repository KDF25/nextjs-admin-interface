import { IUser } from "@/app/types";
import { FC } from "react";
import { UserItem } from "./userItem";
import styles from "./userTable.module.scss";

interface UserTableProps {
  users: IUser[]

}

export const UserTable: FC<UserTableProps> = ({users}) => {
  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <span>Name</span>
        <span>Email</span>
        <span>Created At</span>
        <span>Role</span>
        <span>Status</span>
        <span>Action</span>
      </div>
      <div className={styles.body}>
        {users.map((item, index) => (
          <UserItem key={index} user={item} />
        ))}
      </div>
    </div>
  );
};
