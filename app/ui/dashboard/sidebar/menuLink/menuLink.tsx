"use client";

import { IListItem } from "@/app/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";
import styles from "./menuLink.module.scss";

interface MenuLinkProps {
  item: IListItem;
}

export const MenuLink: FC<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`${styles.wrapper} ${pathname === item.path && styles.active}`}
    >
      {item.icon}
      <p>{item.title}</p>
    </Link>
  );
};
