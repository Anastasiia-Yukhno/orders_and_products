import { ListGroup } from "react-bootstrap";

import { TOrder } from "../../types";
import { getDate1, getDate2 } from "../../units";

import styles from "./OrdersProductList.module.scss";

type TOrderProductList = {
  order: TOrder;
};

const OrdersProductList = ({ order }: TOrderProductList) => {
  const getProducts = () =>
    order.products.map((product) => (
      <ListGroup.Item
        as={"div"}
        variant="light"
        className={`${styles.Product} p-10 d-flex`}>
        <div className={styles.Cell}>{product.title}</div>

        <div className={styles.Cell}>{product.type}</div>

        <div className={styles.CellDate}>
          <span>{getDate1(product.guarantee.start)}</span>

          <span>{getDate1(product.guarantee.end)}</span>
        </div>

        <div className={styles.CellDate}>
          <span>{getDate2(product.guarantee.start)}</span>

          <span>{getDate2(product.guarantee.end)}</span>
        </div>

        <div className={styles.CellDate}>
          {" "}
          <span>{product.price[0].value} $</span>
          <span>{product.price[1].value} UAH</span>
        </div>
      </ListGroup.Item>
    ));

  return <ListGroup>{getProducts()}</ListGroup>;
};

export default OrdersProductList;
