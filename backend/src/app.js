import express from "express";
import routes from "./routes/index.js";
const app = express();

// Global middlewares
app.use(express.json());

//handling routes
app.use("/api", routes);
app.get("/", (req, res) => {
  res.send(`<h1 style="display: flex; 
  justify-content: center; 
  align-items: center; 
  height: 100vh; 
  margin: 0;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(90deg,rgb(19, 65, 106),rgb(121, 175, 178));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;">Welcome to SyncFlow</h1>`);
});

export default app;
