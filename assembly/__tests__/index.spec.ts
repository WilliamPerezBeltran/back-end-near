import { Context } from 'near-sdk-as';
import { createProduct,getproductById,deleteProductbyId,updateProduct } from "../index";
import { Product, productsMap } from "../models/Product";
import { createComment } from "../index";

describe("contract methods", () => {
	it("creates a product", () => {
		const product = createProduct("producto",12.25,"la descripcion del producto",20);
		expect(productsMap.getSome(product.productId)).toStrictEqual(product);
	});

	it("find product by id", () => {
		const producto1 = createProduct("producto1",10.25,"la descripcion del producto1",2);
		const producto2 = createProduct("producto2",9.0,"la descripcion del producto2",1);
		const producto3 = createProduct("producto3",8.28,"la descripcion del producto3",4);
		const producto4 = createProduct("producto4",5.2,"la descripcion del producto4",3);

		expect(productsMap.getSome(producto1.productId)).toStrictEqual(producto1);
		expect(productsMap.getSome(producto2.productId)).toStrictEqual(producto2);
		expect(productsMap.getSome(producto3.productId)).toStrictEqual(producto3);
		expect(productsMap.getSome(producto4.productId)).toStrictEqual(producto4);
	});

	it("delete product by id",() => {
	    expect(() => {
			const producto5 = createProduct("producto5",6.25,"la descripcion del producto6",10);
			deleteProductbyId(producto5.productId)
			getproductById(producto5.productId)
	    }).toThrow()
	})

	it("find all product by id test 1", () => {
		const product6 = createProduct("product6",12.25,"la descripcion del product6",2);
		const product7 = createProduct("product7",12.25,"la descripcion del product7",21);
		const product8 = createProduct("product8",12.25,"la descripcion del product8",10);
		const product9 = createProduct("product9",12.25,"la descripcion del product9",1);
		const lenthProduct = 4
		expect(productsMap.values(0, productsMap.length).length).toBe(4);
	});

	it("update product", () => {
		const product = createProduct("product",12.25,"la descripcion del product",2);
		updateProduct(product.productId,{ productName:"update product",productPrice:5.8,productDescription:"update product descripcion",productQuantity:2})
		
		const findProductUpdate = Product.findProduct(product.productId);

		expect(findProductUpdate.productId).toStrictEqual(product.productId);
		expect(findProductUpdate.productName).toStrictEqual("update product");
		expect(findProductUpdate.productPrice).toStrictEqual(5.8);
		expect(findProductUpdate.productDescription).toStrictEqual("update product descripcion");
		expect(findProductUpdate.productQuantity).toStrictEqual(2);
	});

	it("create comment", () => {
		const product = createProduct("product",10.02,"la descripcion",2);
		const comment = createComment(1,Context.sender,product.productId)
		expect(comment.commentId).toStrictEqual(comment.commentId)
		expect(comment.creator).toStrictEqual(Context.sender)
		expect(comment.productId).toStrictEqual(product.productId)

	});

});
