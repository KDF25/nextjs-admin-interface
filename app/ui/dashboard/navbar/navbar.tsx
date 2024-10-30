"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";
import styles from "./navbar.module.scss";

interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};
