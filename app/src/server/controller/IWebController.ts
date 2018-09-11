import {Request, Response, NextFunction} from "express";

export interface IWebController {
    prefix: String;

    processResult(req: Request, res: Response, next: NextFunction): void;
}