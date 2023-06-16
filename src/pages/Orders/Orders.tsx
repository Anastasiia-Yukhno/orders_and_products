import { useSelector } from "react-redux";

import { defaultStateType } from "../../state";

import NavigationMenu from "../../components/NavigationMenu";
import OrdersList from "../../components/OrdersList/OrdersList";
import TopMenu from "../../components/TopMenu";

import { AddNew } from "../../icons/AddNew";

import styles from "./Orders.module.scss";

const Orders = () => {
  const orders = useSelector((state: defaultStateType) => state.orders);

  return (
    <>
      <TopMenu />
      <div className={styles.Container}>
        <NavigationMenu />
        <div className={styles.Orders}>
          <div className={styles.Title}>
            <a href="#" className={styles.AddNew}>
              <AddNew />
            </a>
            <span>Приходы / {orders.length}</span>
          </div>
          <div className={styles.OrdersList}>
            <OrdersList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
