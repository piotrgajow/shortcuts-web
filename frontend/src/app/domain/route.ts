export class Route {
    id: number;
    description: String;

    constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.description =  obj.description;
        }
    }

}
