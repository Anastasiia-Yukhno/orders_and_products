import { useState } from "react";
import { useSelector } from "react-redux";

import { defaultStateType } from "../../state";

import ProductsList from "../../components/ProductList";
import NavigationMenu from "../../components/NavigationMenu";
import TopMenu from "../../components/TopMenu";
import ProductFilter from "../../components/ProductFilter/ProductFilter";

import { AddNew } from "../../icons/AddNew";

import styles from "./Products.module.scss";

const Products = () => {
  const [filter, setFilter] = useState<string>("All");
  const orders = useSelector((state: defaultStateType) => state.orders);

  const getProductCount = () =>
    orders.reduce((count, order) => order.products.length + count, 0);

  return (
    <>
      <TopMenu />
      <div className={styles.Container}>
        <NavigationMenu />
        <div className={styles.Orders}>
          <div className={styles.Header}>
            <div className={styles.Title}>
              <AddNew />
              <div>Продукты / {getProductCount()}</div>
            </div>
            <div className={styles.Filter}>
              <ProductFilter
                filter={filter}
                orders={orders}
                onChange={(value) => setFilter(value)}
              />
            </div>
          </div>

          <div className={styles.OrdersList}>
            {orders.map((order) => {
              return <ProductsList order={order} filter={filter} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
