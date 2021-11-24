#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

# echo
# echo ---------------------------------------------------------
# echo "Step 1: Build the contract (may take a few seconds)"
# echo ---------------------------------------------------------
# echo

rm -rf ./build && rm -rf ./neardev
npm run all

echo
echo
echo ---------------------------------------------------------



exit 0

