export class Route {
    id: number | undefined;
    locationFrom = '';
    locationTo = '';
    description = '';

    constructor(obj?: any) {
        if (obj) {
            this.id = obj.id;
            this.locationFrom = obj.locationFrom;
            this.locationTo = obj.locationTo;
            this.description = obj.description;
        }
    }

}
