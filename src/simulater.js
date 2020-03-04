import { World } from "./world";
import { Action } from "./action";
import lodash from "lodash";
export class Simulater {
  constructor() {
    this.world = new World();
  }

  //dummySchedule = {regionNo:1, fight:6, patrolNormal:1, patrolKnight:1, develop:2}
  dummyActions(dummySchedule) {
    let actions = [];
    Array.from(new Array(dummySchedule.fight)).map(() => {
      actions.push(
        new Action({
          type: "fight",
          regionNo: dummySchedule.regionNo,
          knights: ["watari", "kaji", "uryu"]
        })
      );
    });

    Array.from(new Array(dummySchedule.patrolNormal)).map(() => {
      actions.push(
        new Action({
          type: "patrol",
          typeDesc: "normal",
          regionNo: dummySchedule.regionNo,
          knights: ["watari", "kaji", "uryu"]
        })
      );
    });

    Array.from(new Array(dummySchedule.patrolKnight)).map(() => {
      actions.push(
        new Action({
          type: "patrol",
          typeDesc: "knight",
          target: "kaji",
          regionNo: dummySchedule.regionNo,
          knights: ["watari", "kaji", "uryu"]
        })
      );
    });

    Array.from(new Array(dummySchedule.develop)).map(() => {
      actions.push(new Action({ type: "develop", regionNo: dummySchedule.regionNo, knights: ["watari", "kaji", "uryu"] }));
    });

    this.transact(actions);
  }

  start() {
    console.log("simulater started");
    this.dummyActions({ regionNo: 1, fight: 6, patrolNormal: 1, patrolKnight: 2, develop: 2 });

    // for (let name in this.world.knights) {
    //   console.log(this.world.knights[name].printKnight());
    // }

    // this.world.regions.map(region => {
    //   if (region.isClear) console.log(region.printRegion());
    // });

    // let action;
    // let isValidAction;
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

    for (let name in this.world.knights) {
      console.log(this.world.knights[name].printKnight());
    }

    // this.world.regions.map(region => {
    //   if (region.isClear) console.log(region.printRegion());
    // });
  }

  transact(actions) {
    if (actions.length > 12 - this.world.getHour()) return false;
    let tempWorld = this.copyWorld();
    let isVaild = actions.map(action => tempWorld.processAction(action)).reduce((rtn, check) => rtn && check, true);

    if (isVaild) {
      actions.map(action => this.world.processAction(action)).reduce((rtn, check) => rtn && check, true);
      return true;
    } else return false;
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

  copyWorld() {
    // return JSON.parse(JSON.stringify(this.world));
    return lodash.cloneDeep(this.world);
    // return this.world.copyWorld();
  }
}
