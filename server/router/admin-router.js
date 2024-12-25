const express = require("express");
const adminController = require("../controllers/admin-controller");
const router = express.Router();
const authMiddleware = require("../middleware/auth-Middleware")
const adminMiddleware = require("../middleware/admin-middleware")

router.route("/users").get(authMiddleware,adminMiddleware,adminController.getAllUsers);
router.route("/contacts").get(authMiddleware,adminMiddleware,adminController.getAllContacts);
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware,adminController.deleteUsersByID);
router.route("/users/:id").get(authMiddleware,adminMiddleware,adminController.getUserByID);
router.route("/users/update/:id").patch(authMiddleware,adminMiddleware,adminController.updateUserById);

module.exports = router;