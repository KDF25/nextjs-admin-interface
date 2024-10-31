"use client";

import { pagination } from "@/app/config";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import styles from "./pagination.module.scss";

interface PaginationProps {
  count: number;
  onPage: number;
}

export const Pagination: FC<PaginationProps> = ({ count, onPage }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";

  const params = new URLSearchParams(searchParams.toString());
  const ITEM_PER_PAGE = onPage;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type: pagination) => {
    type === pagination.prev
      ? params.set("page", String(parseInt(page) - 1))
      : params.set("page", String(parseInt(page) + 1));
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.wrapper}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage(pagination.prev)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage(pagination.next)}
      >
        Next
      </button>
    </div>
  );
};
