# Hotel'iko

## V1.0

## Configuration IDE recommandée

[VSCode](https://code.visualstudio.com/) (and disable Vetur).


## Installation des modules Node : dans le dossier client/
```sh
npm install
```
## Installation des modules Node : dans le dossier server/
```sh
npm install
```
## Après (assurez-vous d'avoir MongoDB déjà installé) : 
### 1. Lancez cette commande dans le dossier server/
```sh
npm run dev
```
### 2. Décommentez le bout de code "Add Tmp admin" dans /server/server.js (Pour simuler la création d'un compte afin de pouvoir accéder à la page d'accueil)
```sh
//add Tmp Admin
    const addAdmin = require("./controller/addAdminController");
    let tmpAdmin = {
        Nom : "Rakoto",
        Prenom : "Rabe",
        Genre : "Homme",
        Username : "RakRabe",
        Password: "Rab1234#"
    } 
    addAdmin.addAdminCtrller(tmpAdmin);
```
### 3. Recommencez à commenter ce code et relancez les deux serveurs "client et server"
```sh
npm run dev
```
### 4. Connectez-vous avec : 
```sh
Username : "RakRabe",
Password: "Rab1234#
```
### Compile and Hot-Reload for Development

```sh
npm run dev
```
`
