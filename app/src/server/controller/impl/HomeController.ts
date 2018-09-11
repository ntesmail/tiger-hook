import {IWebController} from "../IWebController";
import {NextFunction, Request, Response} from "express";
import * as path from 'path';
import * as fs from 'fs';

export class HomeController implements IWebController{
    prefix: String = "*";

    processResult(req: Request, res: Response, next: NextFunction): void {
        let reqPath = req.path;
        if(reqPath == '/'){
            reqPath = '/index.html';
        }
        let filePath = path.join(__dirname, '../../../public', reqPath);
        if(!fs.existsSync(filePath)){
            reqPath = '/index.html';
            filePath = path.join(__dirname, '../../../public', reqPath);
        }
        if(reqPath.indexOf(".html") >= 0){
            res.set('Content-Type', 'text/html');
        }else if(reqPath.indexOf(".js") >=0){
            res.set('Content-Type', 'application/x-javascript');
        }else if(reqPath.indexOf(".css") >= 0){
            res.set('Content-Type', 'text/css; charset=utf-8');
        }else if(reqPath.indexOf(".ico") >= 0){
            res.set('Content-Type', 'image/png');
        }
        res.send(fs.readFileSync(filePath, 'utf-8'));
    }

}
