import { KnightData, RegionData, BuildingData } from "./data";
import { Knight } from "./knight";
import { Region } from "./region";

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
    regions[0].build(BuildingData.중앙청사);
    return regions;
  }

  checkAction(action) {
    const region = this.regions[action.regionNo];
    // return region.checkAction(action);
    return true;
  }

  processAction(action) {
    if (action.typeDesc === "over") action.knights.map(name => this.knights[name].doAction(20));
    else action.knights.map(name => this.knights[name].doAction());

    switch (action.type) {
      case "fight":
        this.regions[action.regionNo].fight(this.knights);
        break;
      case "patrol":
        this.regions[action.regionNo].patrol(this.knights, action);
        this.dayPatrolCount++;
        break;
      case "build":
        this.regions[action.regionNo].build();
        break;
      case "develop":
        this.regions[action.regionNo].develop();
        break;
      default:
        console.log("not vaild action");
        return;
    }
    this.actionHistory.push(action);
    this.curTime++;
  }

  processDay() {
    this.dayPatrolCount = 0;
    this.dayRest();
  }

  eatRamen(knightNames) {
    knightNames.forEach(knightName => {
      if (!knightName || !this.knights[knightName]) return;
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
