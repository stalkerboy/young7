export class Building {
  constructor(building) {
    this.name = building.name;

    this.buildDemand = building.buildDemand ? building.buildDemand : 999;
    this.scienceDemand = building.scienceDemand ? building.scienceDemand : 999;

    this.spirit = building.spirit ? building.spirit : 0;
    this.science = building.science ? building.science : 0;
    this.information = building.information ? building.information : 0;

    this.spiritPlus = building.spiritPlus ? building.spiritPlus : 0;
    this.sciencePlus = building.sciencePlus ? building.sciencePlus : 0;
    this.informationPlus = building.informationPlus ? building.informationPlus : 0;

    this.spiritMulti = building.spiritMulti ? building.spiritMulti : "1";
    this.scienceMulti = building.scienceMulti ? building.scienceMulti : "1";
    this.informationMulti = building.informationMulti ? building.informationMulti : "1";

    this.patrolPlus = building.patrolPlus ? building.patrolPlus : 0;
    this.buildPlus = building.buildPlus ? building.buildPlus : 0;
    this.develPlus = building.develPlus ? building.develPlus : 0;

    this.malefeelingPlus = building.malefeelingPlus ? building.malefeelingPlus : 0;
    this.femalefeelingPlus = building.femalefeelingPlus ? building.femalefeelingPlus : 0;

    this.areaLimit = building.areaLimit ? building.areaLimit : -1;
    this.cityLimit = building.cityLimit ? building.cityLimit : -1;

    this.buildDestroyPlan = building.buildDestroyPlan ? building.buildDestroyPlan : false;
    this.patrolDestroyPlan = building.patrolDestroyPlan ? building.patrolDestroyPlan : false;

    this.fatigue = building.fatigue ? building.fatigue : -5;
  }

  toString() {
    return this.name;
  }
}
