export type Computer = {
  gpu: {
    id: number;
    name: string;
    price: number;
    tdp: number;
  };
  cpu: {
    id: number;
    name: string;
    price: number;
    socket: string;
    tdp: number;
  };
  storage: {
    id: number;
    name: string;
    price: number;
  };
  motherboard: {
    id: number;
    name: string;
    price: number;
    socket: string;
    ram_type: string;
    format: string;
  };
  ram: {
    id: number;
    name: string;
    price: number;
    type: string;
  };
  case: {
    id: number;
    name: string;
    price: number;
    format: string;
    image: string;
  };
  cooling: {
    id: number;
    name: string;
    price: number;
    sockets: string;
  };
  psu: {
    id: number;
    name: string;
    price: number;
    tdp: number;
  };
};
