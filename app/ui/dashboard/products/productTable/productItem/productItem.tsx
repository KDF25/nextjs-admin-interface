import { IProduct } from "@/app/types";
import avatar from "@/public/noavatar.png";
import Image from "next/image";
import { FC } from "react";
import styles from "./productItem.module.scss";

interface ProductItemProps {
  product: IProduct;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>
        <Image
          src={avatar}
          alt="user"
          width={40}
          height={40}
          className={styles.image}
        />
        <p>{product.title}</p>
      </div>
      <span>{product.desc}</span>
      <span>$ {product.price.toLocaleString()}</span>
      <span>{new Date(product.createdAt).toLocaleDateString()}</span>
      <span>{product.stock.toLocaleString()}</span>
      <div className={styles.buttons}>
        <button className={`${styles.button} ${styles.view}`}>View</button>
        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
      </div>
    </div>
  );
};
