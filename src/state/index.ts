import { orders, products } from "../mockup/info";
import { TOrder, TProduct } from "../types"

export type defaultStateType = {
    products: TProduct[];
    orders: TOrder[];
}
export const defaultState: defaultStateType = {
    products: products,
    orders: orders,
}