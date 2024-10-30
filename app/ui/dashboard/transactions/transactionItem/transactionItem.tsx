import { ITransaction } from "@/app/types";
import avatar from "@/public/noavatar.png";
import Image from "next/image";
import { FC } from "react";
import styles from "./transactionItem.module.scss";

interface TransactionItemProps {
  transaction: ITransaction;
}

export const TransactionItem: FC<TransactionItemProps> = ({ transaction }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>
        <Image
          src={avatar}
          alt="transaction"
          width={40}
          height={40}
          className={styles.image}
        />
        <p>{transaction.name}</p>
      </div>
      <span className={styles.status}>{transaction.status}</span>
      <span className={styles.date}>{transaction.date}</span>
      <span className={styles.amount}>
        ${transaction.amount.toLocaleString()}
      </span>
    </div>
  );
};
