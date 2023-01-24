export interface ICartItem {
  id: number | string;
  photo: string;
  name: string;
  price: number;
  cartQuantity: number;
}

export interface IItem {
  id: number | string;
}

export interface ICartTotal {
  total: number;
  quantity: number;
}

export interface IProduct {
  id: number | string;
  name: string;
  price: string;
  description: string;
  photo: string;
}

export interface IState {
  items: never[] | undefined;
  status: string | null;
}

export interface IModal {
  isOpen: boolean;
}
