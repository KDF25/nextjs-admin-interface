import { paths, productsData } from "@/app/config";
import { Pagination, ProductTable, Search } from "@/app/ui";
import styles from "@/app/ui/dashboard/products/products.module.scss";
import Link from "next/link";
import { FC } from "react";

const ProductsPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href={paths.productsAdd}>
          <button className={styles.button}>Add New</button>
        </Link>
      </div>
      <ProductTable products={productsData} />
      <Pagination />
    </div>
  );
};

export default ProductsPage;
