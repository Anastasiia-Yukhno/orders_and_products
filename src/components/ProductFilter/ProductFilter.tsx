import { Form } from "react-bootstrap";
import styles from "./ProductFilter.module.scss";
import { TOrder } from "../../types";
import { CancelFilter } from "../../icons/CancelFilter";

type TProductFilter = {
  orders: TOrder[];
  onChange: (value: string) => void;
  filter: string;
};

const ProductFilter = ({ orders, onChange, filter }: TProductFilter) => {
  const getProductTypes = () => {
    const types: string[] = ["All"];
    orders.map((order) => {
      order.products.map((product) => {
        if (!types.find((type) => type === product.type)) {
          types.push(product.type);
        }
      });
    });
    return types;
  };

  return (
    <div className={styles.Container}>
      <Form.Select
        value={filter}
        onChange={(e) => onChange(e.currentTarget.value)}>
        {getProductTypes().map((type) => (
          <option>{type}</option>
        ))}
      </Form.Select>
      <button className={styles.Button} onClick={() => onChange("All")}>
        <CancelFilter />
      </button>
    </div>
  );
};

export default ProductFilter;
