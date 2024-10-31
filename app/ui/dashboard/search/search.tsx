import { FC } from "react";
import styles from "./search.module.scss";
import { MdSearch } from "react-icons/md";

interface SearchProps {
  placeholder: string;
}

export const Search: FC<SearchProps> = ({ placeholder }) => {
  return (
    <div className={styles.search}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};
