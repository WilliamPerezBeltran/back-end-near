# OPINIONTRUST

## Descripción

- OpinionTrust es un smart contract que permite mirar las opinions de los usuarios para poder comprar un determinado producto y poder generar confianza en los usuarios a la hora de comprar un producto. El producto es creado por el usuario y los usuasrios hacen comentarios negativos o positivos del producto y determinar si el producto es buena inversion para la necesidad del usuario.

OpinionTrust  te permite:
1. Crear, obtener usuarios
2. Crear, borrar, obtener, actualizar y obtener todos los productos
3. Atar el producto con el usuario
4. Contar los like y dislike que tiene cada producto
5. Crear, encontrar, eleminar y obtener todas las categorias 

## Stack
- assemblyscript 6.14.4
- near-cli 12.16.2
- near-sdk-as 3.2.3
- npm v7.7.6
- node v15.14.0
- @assemblyscript/loader 17.0.2


###  Prerequisitos
- Asegúrese de haber instalado [Node.js] ≥ 15 (recomendamos usar [nvm])
- nvm use 15
- Asegúrese de haber instalado yarn: `npm install -g yarn`
- Instalar dependencias: `yarn install`
- Cree una cuenta de prueba NEAR [https://wallet.testnet.near.org/]
- Instale NEAR CLI globalmente: [near-cli] es una interfaz de línea de comandos (CLI) para interactuar con NEAR blockchain

```bash
# Install near-cli
$ yarn install --global near-cli
```

###  Configuración de NEAR CLI
- Configure su near-cli para autorizar su cuenta de prueba creada recientemente:
    near login
```bash
$ near login
```
    

### Clonar repositorio
```bash
# clonar repositorio
$ git https://github.com/WilliamPerezBeltran/back-end-near

# Ir al directorio del app
$ cd back-end-near
```

### Instalar dependencias 
```bash
# instalar con npm 
$ npm install

# Instalar con yarn 
$ yarn o yarn install 
```

### Ejecutar aplicación
```bash
# Ejecutar app con npm 
$ npm run build
```

### Ejecutar tests

```bash
# Ejecutar test
$ npm run test
```

### Deploy app

```bash
# Deploy app con npm 
$ npm run dev

```

### Ejecutar build, test, deploy 

```bash
# Deploy app con npm 
$ npm run all

```

## Qué incluye
```
├───assembly/
│   ├───__tests__/
│   │   ├───as-pect.d.ts
│   │   └───index.spec.ts
│   ├───models/
│   │   ├───Category.ts
│   │   ├───Comment.ts
│   │   ├───Opinion.ts
│   │   ├───Product.ts
│   │   └───User.ts
│   ├───as_types.d.ts
│   ├───index.ts
│   └───tsconfig.json
├───build/
│   └───release/
│       └───back-end.wasm
├───neardev/
│   ├───dev-account
│   └───dev-account.env
├───scripts/
│   ├───1.build-proyect.sh
│   ├───2.setup-proyect.sh
│   └───3.clean-proyect.sh
├───tests/
│   └───index.js
├───README.md
├───as-pect.config.js
├───asconfig.json
├───index.js
├───package-lock.json
└───package.json
```

## Explicación de las carpetas
- assembly: Código donde se encuentra todo lo relacionado al smart contract.
- assembly/test: Código donde se encuentra todo lo relacionado a los test del smart contract.
- assembly/models: Código donde se encuentra los modelos del smart contract.
- build: Build el smart contractArchivos javascript en donde cada uno es un componente.
- neardev: Cuenta y nombre del contrato actual.
- scripts: Ejecucion de comando de bash para borrar el codigo y actualizarlo. 

## Agregar varialbe OWNER a env
 - Asegurese de ejecutar en la consola la variable con la cual se va logear en near para que quede guardado en las variables de la consola env 

```bash
$ OWNER=<near_user>

# ejemplo
$ OWNER=williamfpb.testnet
```

## Ejecutar scripts
```bash
# ejecutar proyecto
$ ./scripts/1.build-proyect.sh

# Configurar proyecot
$ ./scripts/2.setup-proyect.sh

# limpiar y crear carpetas del proyeco de near
$ ./scripts/3.clean-proyect.sh
```

## Ejecutar metodos del contrato
- Los siguientes comandos le permiten interactuar con el smart contract OpinionTrust utilizando NEAR CLI.

### User
```bash
# registrar usuario
$ near call $(cat neardev/dev-account) registerUser '{"userName":"william","userEmail":"william@gmail.com"}' --account_id $OWNER

# Obtener el usuario por el id
$ near call $(cat neardev/dev-account) getUserbyId '{"creator":"williamfpb.testnet"}' --account_id $OWNER
```
### Product
```bash
# Crear producto
$ near call $(cat neardev/dev-account) createProduct '{"productName":"nombre producto","productPrice":0.01,"productDescription":"description producto","productQuantity":2}' --account_id $OWNER

# Obtener producto by id 
$ near call $(cat neardev/dev-account) getproductById '{"productId":<productById>}' --account_id $OWNER

# Borrar producto by id  
$ near call $(cat neardev/dev-account) deleteProductbyId '{"productId":<productById>}' --account_id $OWNER

# Update producto   
$ near call $(cat neardev/dev-account) updateProduct '{"productId":<productId>, "updateProduct":{ "productName":<updateProduct>","productPrice":<productPrice>,"productDescription":<productDescription>,"productQuantity":<productQuantity>} }' --account_id $OWNER

# Obtener todos los productos   
$ near call $(cat neardev/dev-account) getAllProducts --account_id $OWNER
```
### Product User
```bash
# Registrar producto y atarlo al usuario
$ near call $(cat neardev/dev-account) registerProductUser '{"productName":<productName>,"productPrice":<productPrice>,"productDescription":<productDescription>,"productQuantity":<productQuantity>}' --account_id $OWNER
```
### Comment
```bash
# Registrar producto y atarlo al usuario
$ near call $(cat neardev/dev-account) createComment '{"commentId":<commentId>,"creator":<creator>,"productId":<productId>}' --account_id $OWNER

# Agregar comentario relacionado con el producto
$ near call $(cat neardev/dev-account) addComment '{"productId":<productId>,"descripcion":<descripcion>}' --account_id $OWNER

# Obtener todos los comentarios 
$ near call $(cat neardev/dev-account) getAllComments  --account_id $OWNER
```
### Buy Product
```bash
# Registrar producto y atarlo al usuario
$ near call $(cat neardev/dev-account) buyProduct '{"productId":<productId>}' --account_id $OWNER
```
### Opinion
```bash
# Agregarle opinion like o dislike al producto
$ near call $(cat neardev/dev-account) opinionProduct '{"opinion":<opinion>,"opinionValue":<opinionValue>,"productId":<productId>' --account_id $OWNER

# Sumar todos los likes de un producto 
$ near call $(cat neardev/dev-account) sumOpinionLiken '{"owner":<owner>,"productId":<productId>' --account_id $OWNER

# Sumar todos los dislikes de un producto 
$ near call $(cat neardev/dev-account) sumOpinionDisLiken '{"owner":<owner>,"productId":<productId>' --account_id $OWNER
```
### Category
```bash
# Agregarle opinion like o dislike al producto
$ near call $(cat neardev/dev-account) insertcategory '{"category":<category>' --account_id $OWNER

# Agregarle opinion like o dislike al producto
$ near call $(cat neardev/dev-account) findcategory '{"category":<category>' --account_id $OWNER

# Agregarle opinion like o dislike al producto
$ near call $(cat neardev/dev-account) findIndexcategory '{"category":<category>' --account_id $OWNER

# Agregarle opinion like o dislike al producto
$ near call $(cat neardev/dev-account) removecategory '{"category":<category>' --account_id $OWNER

# Agregarle opinion like o dislike al producto
$ near call $(cat neardev/dev-account) getAllCategories '{"category":<category>' --account_id $OWNER
```
## Creador

**William Pérez**

- <https://github.com/WilliamPerezBeltran>

