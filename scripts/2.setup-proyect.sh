#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

OWNER=williamfpb.testnet

near call $(cat neardev/dev-account) createProduct '{"productName":"nombre producto","productPrice":12.05,"productDescription":"description producto","productQuantity":2}' --account_id $OWNER

near call $(cat neardev/dev-account) createProduct '{"productName":"sfs fsfds","productPrice":12.05,"productDescription":"description producto","productQuantity":1}' --account_id $OWNER





near call $(cat neardev/dev-account) getAllProducts  --account_id $OWNER

near call $(cat neardev/dev-account) getAllComments --account_id $OWNER

near call $(cat neardev/dev-account) registerUser '{"userName":"My name","userEmail":"name@gmail.com"}' --account_id $OWNER

near call $(cat neardev/dev-account) registerProductUser '{"productName":"otro product","productPrice":25.58,"productDescription":"otra descripcion","productQuantity":5}' --account_id $OWNER


near call $(cat neardev/dev-account) registerProductUser '{"productName":"test product","productPrice":25.58,"productDescription":"osssssstra descripcion","productQuantity":5}' --account_id $OWNER
near call $(cat neardev/dev-account) getUserbyId '{"creator":"williamfpb.testnet"}' --account_id $OWNER

# near call $(cat neardev/dev-account) addComment '{"productId":1666696188,"descripcion":"ddddddddddd"}' --account_id $OWNER

# near call $(cat neardev/dev-account) addComment '{"productId":1666696188,"descripcion":"ole_1"}' --account_id $OWNER


# near call $(cat neardev/dev-account) addComment '{"productId":1489886537,"descripcion":"wala_0"}' --account_id $OWNER

# near call $(cat neardev/dev-account) addComment '{"productId":3005339520,"descripcion":"rururu"}' --account_id $OWNER


#  near call $(cat neardev/dev-account) deleteComments --account_id $OWNER


# near call $(cat neardev/dev-account) getAllComments --account_id $OWNER




exit 0
