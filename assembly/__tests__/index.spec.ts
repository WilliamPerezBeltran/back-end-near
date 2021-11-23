import { Context } from 'near-sdk-as';
import { createProduct,getproductById } from "../index";
import { Product, productsMap } from "../models/Product";

describe("contract methods", () => {
  it("creates a product", () => {
    const product = createProduct("producto",12.25,"la descripcion del producto",20);
    expect(productsMap.getSome(product.productId)).toStrictEqual(product);
  });

  it("find producto by id", () => {
  	const producto1 = createProduct("producto1",10.25,"la descripcion del producto1",2);
  	const producto2 = createProduct("producto2",9.0,"la descripcion del producto2",1);
  	const producto3 = createProduct("producto3",8.28,"la descripcion del producto3",4);

    expect(productsMap.getSome(producto1.productId)).toStrictEqual(producto1);
    expect(productsMap.getSome(producto2.productId)).toStrictEqual(producto2);
    expect(productsMap.getSome(producto3.productId)).toStrictEqual(producto3);
  });


});

