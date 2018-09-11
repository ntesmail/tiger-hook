
export class HttpUtils{
    static success<T>(result: T){
        let params = {
            "code": 200,
            "data": result
        }
        return params;
    }
}