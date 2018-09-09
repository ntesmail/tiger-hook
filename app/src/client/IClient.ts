
export interface IClient {

    getHealthStatus(): Promise<boolean>;
}