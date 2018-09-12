
export class utils{
    static getTime(data: any){
        let year = new Date(data.time).getFullYear();
        let month = (new Date(data.time).getMonth() + 1);
        let day = new Date(data.time).getDate();
        let num = parseInt((data.time - new Date(year, month-1, day).getTime()) / (5*1000) + "");
        let time = `${year}-${month}-${day}`;
        return {time, num};
    }
}