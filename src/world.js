import { KnightData, RegionData } from "./data";
import { Knight } from "./knight";
import { Region } from "./region";

export class World {
  constructor(knights) {
    this.actionHistory = [];
    this.curTime = 0;

    this.knights = knights ? knights : this.createAllKnight();
    this.regions = this.createAllRegion();
  }

  createAllKnight() {
    const knights = {};
    for (let key in KnightData) {
      knights[key] = new Knight(KnightData[key]);
    }
    return knights;
  }

  createAllRegion() {
    let regions = [];
    for (let region of RegionData) {
      regions.push(new Region(region));
    }
    return regions;
  }

  checkAction(action) {
    const region = this.regions[action.regionNo];
    // return region.checkAction(action);
    return true;
  }

  processAction(action) {
    this.actionHistory.push(action);
    this.curTime++;
  }

  processDay() {
    this.dayRest();
  }

  eatRamen(knightNames = []) {
    knightNames.forEach(knightName => {
      this.knights[knightName].eatRamen();
    });
  }

  dayRest() {
    this.knights.forEach(knight => {
      knight.dayRest();
    });
  }

  getHour() {
    return this.curTime % 12;
  }

  getDay() {
    return parseInt(this.curTime / 12) + 1;
  }

  getScience() {
    this.regions.reduce((science, region) => {
      // let cur = region.buildings.reduce((acc, building) => {
      //   return aaa;
      // });
      // return science + cur;
    });
  }

  getSpirit() {}

  getInfomation() {}
}
