import { productCategoryModelProps } from "../../server/models/productCategory.model";

const productCategoryMock: productCategoryModelProps[] = [
  {
    id: "1",
    name: "Makanan",
    active: true,
    created_user: "superadmin",
    created_date: new Date("2023-02-01 07:00:00:00"),
    updated_user: "superadmin",
    updated_date: new Date("2023-02-01 07:00:00:00"),
  },
  {
    id: "2",
    name: "Minuman",
    active: true,
    created_user: "superadmin",
    created_date: new Date("2023-02-01 07:00:00:00"),
    updated_user: "superadmin",
    updated_date: new Date("2023-02-01 07:00:00:00"),
  },
];

export default productCategoryMock;
