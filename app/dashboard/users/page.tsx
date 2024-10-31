import { paths, usersData } from "@/app/config";
import { Pagination, Search, UserTable } from "@/app/ui";
import styles from "@/app/ui/dashboard/users/users.module.scss";
import Link from "next/link";
import { FC } from "react";

const UsersPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href={paths.usersAdd}>
          <button className={styles.button}>Add New</button>
        </Link>
      </div>
      <UserTable users={usersData} />
      <Pagination />
    </div>
  );
};

export default UsersPage;
