import { ListGroup } from "react-bootstrap";
import { TOrder } from "../../types";
import { getDate1, getDate2 } from "../../units";

import styles from "./ProductList.module.scss";

type TProductList = {
  order: TOrder;
  filter: string;
};

const ProductList = ({ order, filter }: TProductList) => {
  const getProducts = () =>
    order.products.map((product) => {
      return filter !== "All" && product.type !== filter ? (
        false
      ) : (
        <ListGroup.Item
          key={product.id}
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

          <div className={styles.Cell}>{product.title}</div>
        </ListGroup.Item>
      );
    });

  return <ListGroup>{getProducts()}</ListGroup>;
};

export default ProductList;
