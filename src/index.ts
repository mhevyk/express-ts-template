import express from "express";

const PORT = process.env.PORT ?? 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/`);
});
