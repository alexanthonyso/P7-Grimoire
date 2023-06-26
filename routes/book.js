const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const resizedImage = require("../middleware/sharp-config");

const bookCtrl = require("../controllers/book");

//Récupération de tous les livres de la BDD
router.get("/", bookCtrl.getAllBooks);

//Récupération des 3 livres les mieux notés
router.get("/bestrating", bookCtrl.getBestBooks);

//Récupération d’un livre en fonction de son id
router.get("/:id", bookCtrl.getOneBook);

//Ajout d’une note à un livre, et mise à jour de sa note moyenne
router.post("/:id/rating", auth, bookCtrl.rateBook);

//Ajout d’un nouveau livre à la BDD
router.post("/", auth, multer, resizedImage, bookCtrl.postBook);

//Modification d’un livre dans la BDD
router.put("/:id", auth, multer, resizedImage, bookCtrl.modifyBook);

//Suppression d’un livre dans la BDD
router.delete("/:id", auth, bookCtrl.deleteBook);

module.exports = router;
