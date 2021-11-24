#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

# echo
# echo ---------------------------------------------------------
# echo "Step 1: Build the contract (may take a few seconds)"
# echo ---------------------------------------------------------
# echo

npm run all

echo
echo
echo ---------------------------------------------------------

# export CONTRACT="LASAAAAAAAAAAAAA"
# # export CONTRACT=$(cat neardev/dev-account)
# echo $(cat neardev/dev-account)


exit 0
