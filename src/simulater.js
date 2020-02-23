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
          isValidAction = this.world.testAction(action);
        } while (!isValidAction);
        this.world.processAction(action);
      }
    }
    // console.log(this.world.curTime);
    // console.log(this.world.actionHistory);
  }

  inputAction() {
    let action = {
      region: "1",
      type: "build",
      target: "1",
      knights: ["watari", "kaji"]
    };

    return action;
  }
}
