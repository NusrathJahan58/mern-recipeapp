import express from "express";
import requireAuth from "../middleweare/requireAuth.js";
import uploadMiddleware from "../middleweare/multerUpload.js";
import {
  uploadAvatar,
  uploadRecipeImages,
} from "../controllers/uploadController.js";
const router = express.Router();

router.post(
  "/recipe_images",
  uploadMiddleware.array("recipe_images",12),
  uploadRecipeImages
);

router.post(
  "/set_avatar",
  [requireAuth, uploadMiddleware.single("avatar")],
  uploadAvatar
);
export default router;
