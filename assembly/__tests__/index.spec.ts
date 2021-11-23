import { Context } from 'near-sdk-as';
import { createProduct } from "../index";
import { Product, productsMap } from "../models/Product";

describe("contract methods", () => {
  it("creates a product", () => {
    const product = Product.insert("producto",12.25,"la descripcion del producto",Context.sender,20);
    expect(productsMap.getSome(product.productId)).toStrictEqual(product);
  });
});

