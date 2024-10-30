import { transactionList } from "@/app/config";
import { FC } from "react";
import { TransactionItem } from "./transactionItem";
import styles from "./transactions.module.scss";

interface TransactionsProps {}

export const Transactions: FC<TransactionsProps> = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <div className={styles.table}>
        <div className={styles.top}>
          <div>
            <span>Name</span>
            <span>Status</span>
            <span>Date</span>
            <span>Amount</span>
          </div>
        </div>
        <div className={styles.cards}>
          {transactionList.map((item, index) => {
            return <TransactionItem key={index} transaction={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
