import { TOrder } from "../../types";

import { Button, ListGroup, Modal } from "react-bootstrap";

import styles from "./DeleteOrderModal.module.scss";

import {
  getDate1,
  getDate2,
  getFullPriceUSD,
  getFullPriceUAH,
} from "../../units";

type TDeleteOrderModal = {
  isVisible: boolean;
  order: TOrder;
  handleDelete: () => void;
  handleClose: () => void;
  handleOpen: () => void;
};

const DeleteOrderModal = ({
  isVisible,
  handleClose,
  order,
  handleDelete,
  handleOpen,
}: TDeleteOrderModal) => {
  debugger;
  return (
    <>
      <Modal
        className={styles.Modal}
        show={isVisible}
        onHide={handleClose}
        backdrop="static"
        centered
        size="lg"
        keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title className={styles.Title}>
            Вы уверены, что хотите удалить этот приход?
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item
              as={"div"}
              variant="light"
              className={`${styles.Order} p-10 d-flex`}>
              <div className={styles.Cell}>{order.title}</div>

              <div className={styles.Cell}>
                {order.products.length} продукта
              </div>

              <div className={styles.CellDate}>
                <span>{getDate1(order.date)}</span>
                <span>{getDate2(order.date)}</span>
              </div>

              <div className={styles.CellDate}>
                {" "}
                <span>{getFullPriceUSD(order)} $</span>
                <span>{getFullPriceUAH(order)} UAH</span>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Отменить
          </Button>
          <Button
            variant="light"
            className={styles.Delete}
            onClick={handleDelete}>
            Удалить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteOrderModal;
