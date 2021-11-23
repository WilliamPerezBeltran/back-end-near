# back-end-near

usar nvm mayor a 15 


 CONTRACT=dev-1637677410025-48870131283445
 OWNER=williamfpb.testnet

  near call $CONTRACT createProduct '{"productName":"nombre producto","productPrice":12.05,"productDescription":"description producto"}' --account_id $OWNER
  near call $CONTRACT createProduct '{"productName":"nombre producto","productPrice":12.05,"productDescription":"description producto","productQuantity":2}' --account_id $OWNER


{
  productId: 1666696188,
  productName: 'nombre producto',
  productPrice: 12.05,
  productDescription: 'description producto',
  productOwner: 'williamfpb.testnet'
}


{
  productId: 1666696188,
  productName: 'nombre producto',
  productPrice: 12.05,
  productDescription: 'description producto',
  productOwner: 'williamfpb.testnet',
  productQuantity: 2,
  productAvailability: true
}


 near call $CONTRACT getproductById '{"productId":1666696188}' --account_id $OWNER