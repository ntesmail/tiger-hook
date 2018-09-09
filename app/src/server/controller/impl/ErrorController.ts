import {IWebController} from "../IWebController";
import {NextFunction, Request, Response} from "express";

export class ErrorController implements IWebController{
    prefix: String = '/error';

    processResult(req: Request, res: Response, next: NextFunction) {
        console.error("error");
        return res.send("hello world");
    }
}