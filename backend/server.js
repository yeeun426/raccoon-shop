import express from "express";
import kakaoAuthRoutes from "./routes/kakaoAuthRoutes.js";

const app = express(); // ✅ app을 정의
const PORT = process.env.PORT || 3001;

// 필요한 미들웨어 설정
app.use(express.json());
app.use("/auth/kakao", kakaoAuthRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
