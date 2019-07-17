import { Request, Response } from "express";

export default [
  {
    path: "/",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("Root endpoint");
    }
  },

  {
    path: "/test",
    method: "get",
    handler: async (req: Request, res: Response) => {
      res.send("test endpoint");
    }
  }
];