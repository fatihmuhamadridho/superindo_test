import { productModelProps } from "../../server/models/product.model";

const productMock: productModelProps[] = [
  {
    id: "1",
    plu: "PDCT0000001",
    name: "Cheetos",
    product_category_id: "1",
    active: true,
    created_user: "superadmin",
    created_date: new Date("2023-02-01 07:00:00:00"),
    updated_user: "superadmin",
    updated_date: new Date("2023-02-01 07:00:00:00"),
  },
  {
    id: "2",
    plu: "PDCT0000002",
    name: "Indomie",
    product_category_id: "1",
    active: true,
    created_user: "superadmin",
    created_date: new Date("2023-02-01 07:00:00:00"),
    updated_user: "superadmin",
    updated_date: new Date("2023-02-01 07:00:00:00"),
  },
  {
    id: "3",
    plu: "PDCT0000003",
    name: "Air Mineral Aqua",
    product_category_id: "2",
    active: true,
    created_user: "superadmin",
    created_date: new Date("2023-02-01 07:00:00:00"),
    updated_user: "superadmin",
    updated_date: new Date("2023-02-01 07:00:00:00"),
  },
];

export default productMock;
