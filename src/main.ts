import { connectDB } from "./libs/db";
import express, { Request, Response } from "express";
import userRoute from "./routes/userRoute";

const app = express();
const PORT = process.env.PORT || 3000;
const clientUrl = `http://localhost:${PORT}`;

app.use(express.json());

// app.post("/api/test", (req, res) => {
//   console.log("✅ POST-Daten:", req.body);
//   res.status(200).json({
//     status: "OK",
//     received: req.body,
//   });
// });
app.use("/api", userRoute);

(async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`The server 🙈 is listening on port ${PORT}`);
    console.log(`Visit ${clientUrl} in your browser`);
  });
})();
