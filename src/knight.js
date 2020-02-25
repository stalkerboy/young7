export class Knight {
  constructor(knight) {
    this.name = knight.name;
    this.feeling = knight.feeling;
    this.fatigue = knight.fatigue;
    this.actionCount = knight.actionCount;
    this.build = knight.build;
    this.patrol = knight.patrol;
    this.develop = knight.develop;

    this.clearPatrolCount = knight.clearPatrolCount;
    this.clearValue = knight.clearValue;
  }

  eatRamen() {
    this.fatigue += 20;
    if (this.fatigue > 100) {
      this.fatigue = 100;
    }
  }

  dayRest() {
    this.fatigue += 5;
    if (this.fatigue > 100) {
      this.fatigue = 100;
    }
  }
}
