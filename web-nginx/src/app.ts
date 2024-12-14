import express, { Request, Response } from "express";
import fetch from "node-fetch";
import os from "os";

const PORT = 8790;

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send(`I'm a programmer from ${os.hostname()}, VERSION: 2.0.0`);
});
app.get("/nginx", async (req: Request, res: Response) => {
  const url = "https://nginx";
  const response = await fetch(url);
  const body = await response.text();
  res.send(body);
});

app.listen(PORT, () => {
  console.log(`port connected successfully 🚀. ${PORT} 🌎`);
});
