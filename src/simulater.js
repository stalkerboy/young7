import { World } from "./world";
import { Action } from "./action";

export class Simulater {
  constructor() {
    this.world = new World();
  }

  //dummySchedule = {regionNo:1, fight:6, patrolNormal:1, patrolKnight:1, develop:2}
  dummyDay(dummySchedule) {
    // for(let dummySchedule.fight){    }
  }

  start() {
    console.log("simulater started");

    //1day
    this.processDay(
      new Action({
        type: "fight",
        regionNo: "1",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "fight",
        regionNo: "1",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "fight",
        regionNo: "1",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "fight",
        regionNo: "1",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "fight",
        regionNo: "1",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "fight",
        regionNo: "1",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "patrol",
        typeDesc: "normal",
        regionNo: "0",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "patrol",
        typeDesc: "normal",
        regionNo: "0",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "patrol",
        typeDesc: "normal",
        regionNo: "0",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "patrol",
        typeDesc: "normal",
        regionNo: "0",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "patrol",
        typeDesc: "normal",
        regionNo: "0",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "patrol",
        typeDesc: "normal",
        regionNo: "0",
        knights: ["watari", "kaji", "uryu"]
      })
    );

    this.world.eatRamen(this.inputRamen());
    this.world.processDay();

    //2day
    this.processDay(
      new Action({
        type: "fight",
        regionNo: "2",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "fight",
        regionNo: "2",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "fight",
        regionNo: "2",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "fight",
        regionNo: "2",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "fight",
        regionNo: "2",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "fight",
        regionNo: "2",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "patrol",
        typeDesc: "normal",
        regionNo: "0",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "patrol",
        typeDesc: "normal",
        regionNo: "0",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "patrol",
        typeDesc: "normal",
        regionNo: "0",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "patrol",
        typeDesc: "normal",
        regionNo: "0",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "patrol",
        typeDesc: "normal",
        regionNo: "0",
        knights: ["watari", "kaji", "uryu"]
      })
    );
    this.processDay(
      new Action({
        type: "patrol",
        typeDesc: "normal",
        regionNo: "0",
        knights: ["watari", "kaji", "uryu"]
      })
    );

    this.world.eatRamen(this.inputRamen());
    this.world.processDay();

    //3day
    this.processDay(new Action());

    this.world.eatRamen(this.inputRamen());
    this.world.processDay();

    //4day
    this.processDay(new Action());

    this.world.eatRamen(this.inputRamen());
    this.world.processDay();

    //5day
    this.processDay(new Action());

    this.world.eatRamen(this.inputRamen());
    this.world.processDay();

    //6day
    this.processDay(new Action());

    this.world.eatRamen(this.inputRamen());
    this.world.processDay();

    // for (let day = 0; day < 7; day++) {
    //   for (let hour = 9; hour < 21; hour++) {
    //     do {
    //       action = new Action(this.inputAction());
    //       isValidAction = this.world.checkAction(action);
    //     } while (!isValidAction);
    //     this.world.processAction(action);
    //     // console.log("day: ", this.world.getDay());
    //     // console.log("hour: ", this.world.getHour());
    //   }
    //   this.world.eatRamen(this.inputRamen());
    //   this.world.processDay();
    // }

    // for (let name in this.world.knights) {
    //   console.log(this.world.knights[name].printKnight());
    // }

    // this.world.regions.map(region => {
    //   if (region.isClear) console.log(region.printRegion());
    // });
  }

  inputAction() {
    // let action = {
    //   type: "fight",
    //   regionNo: "1",
    //   knights: ["watari", "kaji", "uryu"]
    // };
    // let action = {
    //   type: "patrol",
    //   typeDesc: "knight",
    //   target: "kaji",
    //   regionNo: "0",
    //   knights: ["watari", "kaji", "uryu"]
    // };
    let action = {
      type: "patrol",
      typeDesc: "normal",
      regionNo: "0",
      knights: ["watari", "kaji", "uryu"]
    };

    return action;
  }

  inputRamen() {
    let knights = ["watari", "kaji", "uryu"];
    return knights;
  }
}
