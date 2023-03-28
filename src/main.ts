import express from "express";

const app = express();
app.use("/test_static", express.static("public"));

app.get("/rondoudou", (req, res) => {
  res.send('<html><body></body><img src="/test_static/rondoudou.gif"></body></html>');
});

app.listen(3000, () => console.log("Serveur démarré"));
