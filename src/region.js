export class Region {
  constructor(region) {
    this.name = region.name;
    this.buildingMax = region.buildingMax;
    this.buildings = region.buildings;
    this.patrolCount = region.patrolCount;
    this.battleCount = region.battleCount;
    this.requiredMental = region.requiredMental;
    this.isClear = region.isClear;
  }
}
