import { productVariantModelProps } from "../../server/models/productVariant.model";

const productVarian: productVariantModelProps[] = [
  {
    id: "1",
    product_id: "2",
    code: "PDCT00000020001",
    name: "Indomie Goreng Original",
    qty: 1000,
    price: 3000,
    active: true,
    created_user: "superadmin",
    created_date: new Date("2023-02-01 07:00:00:00"),
    updated_user: "superadmin",
    updated_date: new Date("2023-02-01 07:00:00:00"),
  },
  {
    id: "2",
    product_id: "2",
    code: "PDCT00000020002",
    name: "Indomie Goreng Bawang",
    qty: 500,
    price: 2700,
    active: true,
    created_user: "superadmin",
    created_date: new Date("2023-02-01 07:00:00:00"),
    updated_user: "superadmin",
    updated_date: new Date("2023-02-01 07:00:00:00"),
  },
  {
    id: "3",
    product_id: "2",
    code: "PDCT00000020003",
    name: "Indomie Goreng Aceh",
    qty: 1000,
    price: 3200,
    active: true,
    created_user: "superadmin",
    created_date: new Date("2023-02-01 07:00:00:00"),
    updated_user: "superadmin",
    updated_date: new Date("2023-02-01 07:00:00:00"),
  },
];

export default productVarian;
