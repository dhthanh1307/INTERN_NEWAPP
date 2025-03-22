export interface Product {
    name: string;
    current_price: number;
    discount_percentage: number;
    remaining_quantity: number;
    image_link: string;
    installment: boolean;
    exclusive: boolean;
    note?: string;
    rating: number;
    sold: number;
  }
  