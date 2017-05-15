export class Route {
  id: number;
  description: String;

  toString(): String {
      return 'Route - ' + this.description + ' (' + this.id + ')';
  }
};
