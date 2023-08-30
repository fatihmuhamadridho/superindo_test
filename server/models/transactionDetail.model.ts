export interface transactionDetailModelProps {
  id: string;
  transaction_id: string;
  product_variant_id: string;
  price: number;
  qty: any;
  subtotal: any;
  active: boolean;
  created_user: any;
  created_date: Date;
  updated_user: any;
  updated_date: Date;
}
