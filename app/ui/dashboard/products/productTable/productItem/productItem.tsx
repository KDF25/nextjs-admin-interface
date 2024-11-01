import { paths } from "@/app/config";
import { deleteProduct } from "@/app/lib";
import { IProduct } from "@/app/types";
import avatar from "@/public/noproduct.jpg";
import Image from "next/image";
import Link from "next/link";
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
        <Link href={paths.products + "/" + product.id}>
          <button className={`${styles.button} ${styles.view}`}>View</button>
        </Link>
        <form action={deleteProduct}>
          <input type="hidden" name="id" value={product.id} />
          <button className={`${styles.button} ${styles.delete}`}>
            Delete
          </button>
        </form>
      </div>
    </div>
  );
};
