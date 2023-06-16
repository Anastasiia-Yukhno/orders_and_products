import { TOrder } from "../types";

export const getDate1 = (date: string) => {
    let currentDate = new Date(date);
    return `${currentDate.getMonth()}/${currentDate.getFullYear()} `;
  };

export const getDate2 = (date: string) => {
    let currentDate = new Date(date);
    return `${currentDate.getDay()}/${currentDate.toLocaleString("default", { month: "long" }).slice(0, 3)}/${currentDate.getFullYear()} 
  `;
};
  
export const getFullPriceUSD = (order: TOrder) => {
    return order.products.reduce(
      (partialSum, a) => partialSum + a.price[0].value,
      0
    );
  };

export const getFullPriceUAH = (order: TOrder) => {
    return order.products.reduce(
      (partialSum, a) => partialSum + a.price[1].value,
      0
    );
};
  
export const getDateTime = () => {
    const now = new Date();

    return {
       date: now.toLocaleDateString(),
       day: now.toLocaleDateString("en-us", { weekday: "long"}),
       hour: now.getHours(),
       minute: now.getMinutes(),
     };
};