"use client";

import { DEBOUNCE } from "@/app/config";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { FC, ChangeEvent } from "react";
import { MdSearch } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";
import styles from "./search.module.scss";

interface SearchProps {
  placeholder: string;
}

export const Search: FC<SearchProps> = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");

      if (e.target.value) {
        e.target.value.length > 2 && params.set("q", e.target.value);
      } else {
        params.delete("q");
      }
      replace(`${pathname}?${params}`);
    },
    DEBOUNCE.search
  );

  return (
    <div className={styles.search}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};
