import { Conductor } from "./conductor";
import { KnightData } from "./data";
import { Knight } from "./knight";

export class World {
  constructor(knights) {
    this.actionHistory = [];
    this.curTime = 0;

    const knights = knights ? knights : this.createAllKnight();
    this.conductor = new Conductor(knights);
  }

  createAllKnight() {
    let knights = [];
    for (knight of KnightData) {
      knights.push(new Knight(knight));
    }
    return knights;
  }

  testAction(action) {
    return true;
  }

  processAction(action) {
    this.actionHistory.push(action);
    this.curTime++;
  }

  getHour() {
    return this.curTime % 12;
  }

  getDay() {
    return this.curTime / 12 + 1;
  }
}
