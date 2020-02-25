import { World } from "./world";

export class Simulater {
  constructor() {
    this.world = new World();
  }

  start() {
    console.log("simulater started");

    let action;
    let isValidAction;

    for (let day = 0; day < 7; day++) {
      for (let hour = 9; hour < 21; hour++) {
        do {
          action = this.inputAction();
          isValidAction = this.world.checkAction(action);
        } while (!isValidAction);
        this.world.processAction(action);
        // console.log("day: ", this.world.getDay());
        // console.log("hour: ", this.world.getHour());
      }
      this.world.eatRamen(this.inputRamen());
    }
  }

  inputAction() {
    let action = {
      regionNo: "1",
      type: "build",
      target: "1",
      knights: ["watari", "kaji", "uryu"]
    };

    return action;
  }

  inputRamen() {
    let knights = ["watari", "kaji", "uryu"];
    return knights;
  }
}
