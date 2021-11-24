# back-end-near

usar nvm mayor a 15 


 CONTRACT=dev-1637708519782-42505619109451
 OWNER=williamfpb.testnet

  near call $(cat neardev/dev-account) createProduct '{"productName":"nombre producto","productPrice":12.05,"productDescription":"description producto","productQuantity":2}' --account_id $OWNER

  near call $(cat neardev/dev-account) createProduct '{"productName":"sfs fsfds","productPrice":12.05,"productDescription":"description producto","productQuantity":1}' --account_id $OWNER

  near call $(cat neardev/dev-account) createProduct '{"productName":"aaa aaa","productPrice":12.05,"productDescription":"aaa aaa","productQuantity":1}' --account_id $OWNER


[
  {
    productId: 1666696188,
    productName: 'nombre producto',
    productPrice: 12.05,
    productDescription: 'description producto',
    productOwner: 'williamfpb.testnet',
    productQuantity: 2,
    productAvailability: true
  },
  {
    productId: 1489886537,
    productName: 'sfs fsfds',
    productPrice: 12.05,
    productDescription: 'description producto',
    productOwner: 'williamfpb.testnet',
    productQuantity: 1,
    productAvailability: true
  },
  {
    productId: 3005339520,
    productName: 'aaa aaa',
    productPrice: 12.05,
    productDescription: 'aaa aaa',
    productOwner: 'williamfpb.testnet',
    productQuantity: 1,
    productAvailability: true
  }
]



near call $(cat neardev/dev-account) getproductById '{"productId":1666696188}' --account_id $OWNER

near call $(cat neardev/dev-account) deleteProductbyId '{"productId":1666696188}' --account_id $OWNER

near call $(cat neardev/dev-account) getAllProducts  --account_id $OWNER





near call $(cat neardev/dev-account) updateProduct '{"productId":3005339520, "updateProduct":{ "productName":"update product","productPrice":5.8,"productDescription":"update product descripcion","productQuantity":2}  }' --account_id $OWNER



near call $(cat neardev/dev-account) addComment '{"productId":1666696188,"descripcion":"ole_0"}' --account_id $OWNER

near call $(cat neardev/dev-account) addComment '{"productId":1666696188,"descripcion":"ole_1"}' --account_id $OWNER


near call $(cat neardev/dev-account) addComment '{"productId":1489886537,"descripcion":"wala_0"}' --account_id $OWNER

near call $(cat neardev/dev-account) addComment '{"productId":3005339520,"descripcion":"data"}' --account_id $OWNER


near call $(cat neardev/dev-account) deleteComments --account_id $OWNER


near call $(cat neardev/dev-account) getAllComments --account_id $OWNER

near call $(cat neardev/dev-account) addComment '{"productId":3005339520,"descripcion":"data"}' --account_id $OWNER





near call $(cat neardev/dev-account) registerUser '{"userName":"My name","userEmail":"name@gmail.com"}' --account_id $OWNER



near call $(cat neardev/dev-account) registerProductUser '{"productName":"otro product","productPrice":25.58,"productDescription":"otra descripcion","productQuantity":5}' --account_id $OWNER






near call $(cat neardev/dev-account) getUserbyId '{"creator":"williamfpb.testnet"}' --account_id $OWNER
