import { NextFunction, Request, request, Response } from "express";

const jwt = require("jsonwebtoken");

const authentication = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err: any, user: any) => {
    if (err) return res.sendStatus(403); // Forbidden if invalid token
    req.user = user;
    next();
  });
};
