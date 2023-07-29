const router = require("express").Router();

const {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  updateProfilePicture,
} = require("../controllers/userControllers");
const { authGuard } = require("../middleware/authMiddleware");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/profile").get(authGuard, userProfile);
router.route("/updateProfile").put(authGuard, updateProfile);
router.route("/updateProfilePicture").put(authGuard, updateProfilePicture);

module.exports = router;
