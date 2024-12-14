import express, { Request, Response } from "express";
import os from "os";

const PORT = 8790;

const app = express();

app.get("/", (req: Request, res: Response, next) => {
  res.send(`I'm a programmer from ${os.hostname()}, VERSION: 2.0.0`);
});

app.listen(PORT, () => {
  console.log(`port connected successfully 🚀. ${PORT} 🌎`);
});
