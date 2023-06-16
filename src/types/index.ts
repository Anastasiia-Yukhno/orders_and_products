
export type TProduct = { 
    id: number;
    serialNumber: number;
    isNew: number;
    photo: string;
    title: string;
    type: string;
    specification: string;
    guarantee: {
        start: string;
        end: string;
    };
    price: [
        {
            value: number;
            symbol: string;
            isDefault: number;
        },
        {
            value: number;
            symbol: string;
            isDefault: number;
        }
    ];
    order: number;
    date: string;
}

export type TOrder = {
    id: number;
    title: string;
    date: string;
    description: string;
    get products(): TProduct[];
}

