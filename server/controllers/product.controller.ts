import productMock from "../../__test__/mock/product.mock";

export class ProductController {
  static async getAll() {
    const response = productMock;
    return response;
  }
}
