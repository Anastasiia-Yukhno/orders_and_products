import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useBoolean } from "usehooks-ts";

import { deleteOrder } from "../../state/actions";
import { defaultStateType } from "../../state";

import {
  getDate1,
  getDate2,
  getFullPriceUAH,
  getFullPriceUSD,
} from "../../units";

import { TOrder } from "../../types";

import { Delete } from "../../icons/Delete";
import { Right } from "../../icons/Right";
import { List } from "../../icons/List";

import { CloseButton, ListGroup } from "react-bootstrap";

import DeleteOrderModal from "../DeleteOrderModal";
import OrdersProductList from "../OrdersProductList";

import styles from "./OrdersList.module.scss";

const OrdersList = () => {
  const dispatch = useDispatch();

  const {
    value: isShowModal,
    setFalse: closeModal,
    setTrue: showModal,
  } = useBoolean(false);

  const {
    value: isShowProductsList,
    setFalse: closeProductsList,
    setTrue: showProductsList,
  } = useBoolean(false);

  const [currentOrder, setCurrentOrder] = useState<TOrder | null>(null);

  const orders = useSelector((state: defaultStateType) => state.orders);

  const onOpenDeleteModal = (order: TOrder) => {
    setCurrentOrder(order);
    showModal();
  };

  const onDelete = (id: number) => {
    dispatch(deleteOrder(id));
    closeModal();
  };

  const onOpenProductList = (order: TOrder) => {
    setCurrentOrder(order);
    showProductsList();
  };

  const onCloseProductList = () => {
    closeProductsList();
    setCurrentOrder(null);
  };

  const getOrders = () =>
    orders.map((order) => {
      return (
        <ListGroup.Item
          key={order.id}
          as={"div"}
          variant="light"
          className={`${styles.Order} p-10 d-flex`}>
          <div className={styles.Cell}>{order.title}</div>
          <div className={styles.Cell}>
            <button
              onClick={() => onOpenProductList(order)}
              className={styles.Button}>
              <List />
            </button>{" "}
          </div>

          <div className={styles.Cell}>{order.products.length} продукта</div>

          <div className={styles.CellDate}>
            <span>{getDate1(order.date)}</span>
            <span>{getDate2(order.date)}</span>
          </div>

          <div className={styles.CellDate}>
            {" "}
            <span>{getFullPriceUSD(order)} $</span>
            <span>{getFullPriceUAH(order)} UAH</span>
          </div>

          <div className={styles.Cell}>
            <button
              onClick={() => onOpenDeleteModal(order)}
              className={styles.Button}>
              <Delete />
            </button>{" "}
          </div>

          {isShowProductsList && currentOrder?.id === order.id && (
            <div className={styles.CellOpen}>
              <button onClick={onCloseProductList} className={styles.Button}>
                <Right />
              </button>
            </div>
          )}
        </ListGroup.Item>
      );
    });

  return (
    <div className={styles.Container}>
      {" "}
      <ListGroup>
        {getOrders()}
        {currentOrder && (
          <DeleteOrderModal
            isVisible={isShowModal}
            handleDelete={() => onDelete(currentOrder.id)}
            handleClose={closeModal}
            handleOpen={showModal}
            order={currentOrder}
          />
        )}
      </ListGroup>
      {isShowProductsList && currentOrder && (
        <div className={styles.ProductList}>
          <div className={styles.Title}>
            <div>{currentOrder.title}</div>
            <CloseButton onClick={onCloseProductList} aria-label="Hide" />
          </div>

          <OrdersProductList order={currentOrder} />
        </div>
      )}
    </div>
  );
};

export default OrdersList;
