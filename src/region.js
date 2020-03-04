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
    this.areaLimit = {};
    this.worldLimit = {};
  }

  fight(data) {
    let { knights, action } = data;
    if (this.fightCount > 6 || this.isClear === true) {
      return false;
    } else {
      this.fightCount++;
      if (this.fightCount === 6) {
        this.isClear = true;
      }
    }
    action.knights.map(name => knights[name].feelup(1));
    return true;
  }

  patrol(data) {
    const { knights, action, dayPatrolCount } = data;
    const requiredPatrol = [10, 10, 10, 14, 14, 22, 22, 30, 36, 42, 50, 50];
    const knightSum = action.knights.reduce((sum, name) => sum + knights[name].patrol, 0);
    const buildingBonus = this.buildings.reduce((acc, building) => acc + building.patrolPlus, 0);

    if (requiredPatrol[dayPatrolCount] < knightSum + buildingBonus) return false;
    let isVaild = true;
    this.patrolCount++;
    switch (action.typeDesc) {
      case "normal":
        const malefeelingPlus = this.buildings.reduce((acc, building) => acc + building.malefeelingPlus, 0);
        const femalefeelingPlus = this.buildings.reduce((acc, building) => acc + building.femalefeelingPlus, 0);
        let feelingBonus = 0;
        action.knights.map(name => {
          feelingBonus = knights[name].sex === "male" ? malefeelingPlus : femalefeelingPlus;
          knights[name].feelup(4 + feelingBonus);
        });
        break;
      case "knight":
        isVaild = knights[action.target].clearPatrol(action);
        break;
      case "scena":
        break;
      default:
        return false;
    }
    return isVaild;
  }

  build(data) {
    const { knights, action, building } = data;
    const knightSum = action.knights.reduce((sum, name) => sum + knights[name].build, 0);
    const buildingBonus = this.buildings.reduce((acc, building) => acc + building.buildPlus, 0);

    if ([dayPatrolCount] < knightSum + buildingBonus) return false;

    if (this.buildingMax > this.buildings.length) {
      this.buildings.push(building);
      return true;
    } else return false;
  }

  develop() {
    if (this.buildingMax < 8) {
      this.buildingMax++;
      return true;
    } else {
      return false;
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
