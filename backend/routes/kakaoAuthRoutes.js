import express from "express";
import {
  kakaoLogin,
  kakaoCallback,
  kakaoTokenLogin,
} from "../controllers/kakaoAuthController.js";

const router = express.Router();

router.get("/login", kakaoLogin);
router.get("/callback", kakaoCallback);

router.post("/", kakaoTokenLogin); // POST /auth/kakao

export default router;
