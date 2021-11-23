import { Context } from 'near-sdk-as';
import { createProduct,getproductById,deleteProductbyId } from "../index";
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
		const producto4 = createProduct("producto4",5.2,"la descripcion del producto4",3);

		expect(productsMap.getSome(producto1.productId)).toStrictEqual(producto1);
		expect(productsMap.getSome(producto2.productId)).toStrictEqual(producto2);
		expect(productsMap.getSome(producto3.productId)).toStrictEqual(producto3);
		expect(productsMap.getSome(producto4.productId)).toStrictEqual(producto4);
	});

	it("delete producto by id",() => {
	    expect(() => {
			const producto5 = createProduct("producto5",6.25,"la descripcion del producto6",10);
			deleteProductbyId(producto5.productId)
			getproductById(producto5.productId)
	    }).toThrow()
	})


});

