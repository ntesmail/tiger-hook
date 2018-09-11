
export interface ICollect {
    exposeType: string;

    processResult(data: any, fn: Function): void;
}