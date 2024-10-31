import { PAGINATION, paths } from "@/app/config";
import { fetchUsers } from "@/app/lib";
import { Pagination, Search, UserTable } from "@/app/ui";
import styles from "@/app/ui/dashboard/users/users.module.scss";
import Link from "next/link";
import { FC } from "react";

interface UsersPageProps {
  searchParams: {
    q?: string;
    page?: string;
  };
}

const UsersPage: FC<UsersPageProps> = async ({ searchParams }) => {
  const onPage = PAGINATION.users
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { users, count } = await fetchUsers(q, page, onPage);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href={paths.usersAdd}>
          <button className={styles.button}>Add New</button>
        </Link>
      </div>
      <UserTable users={users} />
      <Pagination count={count} onPage={onPage} />
    </div>
  );
};

export default UsersPage;
