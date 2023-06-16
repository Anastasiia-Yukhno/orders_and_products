import { TOrder } from "../../types"
import { DELETE_ORDER } from "../actionTypes";
import { store } from "../store"

export const deleteOrder = (id: number) => {
    const orders: TOrder[] | undefined = store.getState().orders.filter(order => order.id !== id)
    return {
        type: DELETE_ORDER,
        value: orders
    };
}