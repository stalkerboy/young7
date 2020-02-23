import { Knight } from "./knight";

export class Conductor {
  constructor({ knights }) {
    this.knights = knights;
  }

  getKnight(name) {
    for (knight of this.knights) {
      if (knight.name === name) return knight;
    }
    return null;
  }
}
