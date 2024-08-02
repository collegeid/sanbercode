import { Request, Response, NextFunction } from "express";
import { IReqUser } from "../utils/interfaces";

export default function authorize(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const userRoles = (req as IReqUser).user.role;

    if (!userRoles || !roles.some(role => userRoles.includes(role))) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    next();
  };
}
