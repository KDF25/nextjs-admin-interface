import { sidebarItems } from "@/app/config";
import avatar from "@/public/avatar.jpg";
import Image from "next/image";
import { FC } from "react";
import { MdLogout } from "react-icons/md";
import { MenuLink } from "./menuLink";
import styles from "./sidebar.module.scss";

interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.user}>
        <Image
          src={avatar}
          alt="Avatar"
          width={50}
          height={50}
          priority
          className={styles.userImage}
        />
        <div className={styles.userDetail}>
          <p>Karimov Damir</p>
          <span>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <span className={styles.title}>{item.title}</span>
            <ul className={styles.menuList}>
              {item.list.map((subitem, ind) => (
                <MenuLink key={ind} item={subitem} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        <p>Logout</p>
      </button>
    </div>
  );
};
