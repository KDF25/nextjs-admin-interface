import { PAGINATION, paths, productsData } from "@/app/config";
import { fetchProducts } from "@/app/lib";
import { Pagination, ProductTable, Search } from "@/app/ui";
import styles from "@/app/ui/dashboard/products/products.module.scss";
import Link from "next/link";
import { FC } from "react";

interface ProductsPageProps {
  searchParams: {
    q?: string;
    page?: string;
  };
}

const ProductsPage: FC<ProductsPageProps> = async ({ searchParams }) => {
  const onPage = PAGINATION.products;
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { products, count } = await fetchProducts(q, page, onPage);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Search placeholder="Search for a product..." />
        <Link href={paths.productsAdd}>
          <button className={styles.button}>Add New</button>
        </Link>
      </div>
      <ProductTable products={products} />
      <Pagination count={count} onPage={onPage} />
    </div>
  );
};

export default ProductsPage;
