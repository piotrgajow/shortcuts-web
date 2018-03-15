export class Route {
    id: number;
    locationFrom: string;
    locationTo: string;
    description: string;

    constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.locationFrom = obj.locationFrom;
            this.locationTo = obj.locationTo;
            this.description =  obj.description;
        }
    }

}
