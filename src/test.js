// let regions = [{ buildings: [{ information: 5 }, { information: 15 }] }, { buildings: [{ information: 5 }, { information: 15 }] }];

// let result = regions.reduce((totalsum, region) => {
//   let regionSum = region.buildings.reduce((sum = 0, building) => {
//     console.log("sum: " + sum);
//     return sum + building.information;
//   }, 0);
//   console.log("regionSum:" + regionSum);
//   return totalsum + regionSum;
// }, 0);

// console.log(result);

// Array.from(new Array(4)).map((_, j) => console.log(j));

class AC {
  constructor() {
    this.value1 = ["a"];
    this.value2 = [new ABC()];
  }

  name() {
    return "ac";
  }
}

class ABC {
  constructor() {
    this.value1 = ["1"];
  }
}

let ac1 = new AC();
console.log("ac1.value1:", ac1.name());

let ac2 = ac1;
ac2.value1.push("b");
console.log("ac1.value1:", ac1.name());
console.log("ac2.value1:", ac2.name());

function cloneObject(obj) {
  var clone = {};
  for (var i in obj) {
    if (typeof obj[i] == "object" && obj[i] != null) clone[i] = cloneObject(obj[i]);
    else clone[i] = obj[i];
  }
  return clone;
}

let ac3 = cloneObject(ac1);
console.log("ac1.value1:", ac1.value1);
console.log("ac3.value1:", ac3.value1);

function cloneObject2(obj) {
  return JSON.parse(JSON.stringify(obj));
}

let ac4 = cloneObject2(ac1);
ac4.value1.push("c");
console.log("ac1.value1:", ac1.value1);
console.log("ac4.value1:", ac4.value1);

let ac5 = cloneObject2(ac1);
ac1.value2[0].value1.push("2");
ac5.value2[0].value1.push("22");
ac5.value1.push("d");
console.log("ac1.value1:", ac1.value1);
console.log("ac5.value1:", ac5.value1);
console.log("ac1.value2[0].value1:", ac1.value2[0].value1);
console.log("ac5.value2[0].value1:", ac5.value2[0].value1);

function ff(a = 0) {
  console.log(a);
  return a;
}

ff();
let t;
ff(t);
ff(5);
