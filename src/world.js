import { KnightData, RegionData, BuildingData } from "./data";
import { Knight } from "./knight";
import { Region } from "./region";
import { Building } from "./building";

export class World {
  constructor(knights) {
    this.actionHistory = [];
    this.curTime = 0;

    this.knights = knights ? knights : this.createAllKnight();
    this.regions = this.createAllRegion();

    this.dayPatrolCount = 0;
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
    regions[0].build(new Building(BuildingData.중앙청사));
    return regions;
  }

  processAction(action) {
    let fatigueDown = 5;
    if (action.typeDesc === "over") fatigueDown = 20;
    let isVaild = action.knights.map(name => this.knights[name].doAction(fatigueDown)).reduce((rtn, vaildCheck) => rtn && vaildCheck, true);

    if (!isVaild) return false;

    switch (action.type) {
      case "fight":
        isVaild = this.regions[action.regionNo].fight(this.knights, action);
        break;
      case "patrol":
        isVaild = this.regions[action.regionNo].patrol(this.knights, action, this.dayPatrolCount);
        this.dayPatrolCount++;
        break;
      case "build":
        isVaild = this.regions[action.regionNo].build(action.typeDesc);
        break;
      case "develop":
        isVaild = this.regions[action.regionNo].develop();
        break;
      default:
        console.log("not vaild action");
        return false;
    }
    this.actionHistory.push(action);
    this.curTime++;
    return isVaild;
  }

  processDay() {
    this.dayPatrolCount = 0;
    this.dayRest();
  }

  eatRamen(knightNames) {
    knightNames.map(knightName => {
      if (!knightName || !this.knights[knightName]) return;
      this.knights[knightName].eatRamen();
    });
  }

  dayRest() {
    for (let name in this.knights) {
      this.knights[name].dayRest();
    }
  }

  getHour() {
    return this.curTime % 12;
  }

  getDay() {
    return parseInt(this.curTime / 12) + 1;
  }

  getScience() {
    return this.regions.reduce((totalsum, region) => {
      let regionSum = region.buildings.reduce((sum, building) => {
        return sum + building.science;
      }, 0);
      return totalsum + regionSum;
    }, 0);
  }

  getSpirit() {
    return this.regions.reduce((totalsum, region) => {
      let regionSum = region.buildings.reduce((sum, building) => {
        return sum + building.spirit;
      }, 0);
      return totalsum + regionSum;
    }, 0);
  }

  getInformation() {
    return this.regions.reduce((totalsum, region) => {
      let regionSum = region.buildings.reduce((sum, building) => {
        return sum + building.information;
      }, 0);
      return totalsum + regionSum;
    }, 0);
  }
}
