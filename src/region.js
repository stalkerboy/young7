import { Building } from "./building";
export class Region {
  constructor(region) {
    this.name = region.name;
    this.buildingMax = region.buildingMax;
    this.buildings = region.buildings;
    this.patrolCount = region.patrolCount;
    this.fightCount = region.fightCount;
    this.requiredMental = region.requiredMental;
    this.isClear = region.isClear;
  }

  fight() {
    if (this.fightCount > 6 || this.isClear === true) {
      return false;
    } else {
      this.fightCount++;
      if (this.fightCount === 6) {
        this.isClear = true;
      }
    }
    return true;
  }

  patrol(knights) {
    this.patrolCount++;
    switch (action.typeDesc) {
      case "normal":
        action.knights.map(name => knights[name].feelup(5));
        break;
      case "knight":
        knights[action.target].clearPatrol(this.name, action);
        break;
      case "scena":
        break;
      default:
        return false;
    }
    return true;
  }

  build(buildingData) {
    this.buildings.push(new Building(buildingData));
  }

  develop() {
    if (this.buildingMax < 8) {
      this.buildingMax++;
    }
  }

  printRegion() {
    const str = `
    name: ${this.name}  requiredMental: ${this.requiredMental}  isClear: ${this.isClear}
    buildings: ${this.buildings}  buildingMax: ${this.buildingMax}
    fightCount: ${this.fightCount}  patrolCount: ${this.patrolCount}
    `;
    return str;
  }
}
