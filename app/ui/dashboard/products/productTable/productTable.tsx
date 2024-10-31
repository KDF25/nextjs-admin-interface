import { IProduct } from "@/app/types";
import { FC } from "react";
import { ProductItem } from "./productItem";
import styles from "./productTable.module.scss";

interface ProductTableProps {
  products: IProduct[];
}

export const ProductTable: FC<ProductTableProps> = ({ products }) => {
  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <span>Title</span>
        <span>Description</span>
        <span>Price</span>
        <span>Created At</span>
        <span>Stock</span>
        <span>Action</span>
      </div>
      <div className={styles.body}>
        {products.map((item, index) => (
          <ProductItem key={index} product={item} />
        ))}
      </div>
    </div>
  );
};
