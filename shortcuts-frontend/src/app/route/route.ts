export class Route {
  id: number;
  description: String;
  averageTime: number;

  toString(): String {
      return 'Route - ' + this.description + ' (' + this.id + ')';
  }
};
