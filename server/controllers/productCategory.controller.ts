import productCategoryMock from "../../__test__/mock/productCategory.mock";

export class ProductCategoryController {
  static async getAll() {
    const response = productCategoryMock;
    return response;
  }
}
