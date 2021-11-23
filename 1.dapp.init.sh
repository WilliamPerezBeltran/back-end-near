#!/bin/bash

echo '
{
  "extends": "near-sdk-as/asconfig.json"
}
' > asconfig.json

echo "$(touch assembly/as_types.d.ts)"

echo '/// <reference types="near-sdk-as/assembly/as_types" />' > assembly/as_types.d.ts

echo "$(touch as-pect.config.js)"
echo 'module.exports = require("near-sdk-as/imports")' > as-pect.config.js

echo "$(mkdir assembly/models)"
echo "$(mkdir assembly/__tests__)"
echo "$(touch  assembly/__tests__/as-pect.d.ts)"
echo '/// <reference types="@as-pect/assembly/types/as-pect" />' > assembly/__tests__/as-pect.d.ts

echo "$(touch  assembly/__tests__/index.spec.ts)"

echo '
describe("contract methods", () => {

});
' > assembly/__tests__/index.spec.ts


# "scripts": {
#   "build": "asb",
#   "deploy": "near dev-deploy build/release/todos-crud-contract.wasm",
#   "dev": "npm run build && npm run deploy",
#   "test": "asp",
# }