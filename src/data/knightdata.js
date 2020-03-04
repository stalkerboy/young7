export const KnightData = {
  watari: {
    name: "와타리",
    feeling: 0,
    fatigue: 100,
    actionCount: 0,

    build: 10,
    patrol: 4,
    develop: 4,

    clearPatrolCount: 0,
    clearValue: [
      { regionNo: 0, requiredFeeling: 20, addFeeling: 10 },
      { regionNo: 0, requiredFeeling: 40, addFeeling: 10 },
      { regionNo: 0, requiredFeeling: 60, addFeeling: 10 },
      { regionNo: 0, requiredFeeling: 80, addFeeling: 10 },
      { regionNo: 0, requiredFeeling: 100, addFeeling: 0 }
    ],
    sex: "female"
  },
  kaji: {
    name: "카지",
    feeling: 0,
    fatigue: 100,
    actionCount: 0,

    build: 3,
    patrol: 4,
    develop: 4,

    clearPatrolCount: 0,
    clearValue: [
      { regionNo: 1, requiredFeeling: 10, addFeeling: 30 },
      { regionNo: 1, requiredFeeling: 40, addFeeling: 20 },
      { regionNo: 1, requiredFeeling: 60, addFeeling: 10 },
      { regionNo: 1, requiredFeeling: 80, addFeeling: 10 },
      { regionNo: 1, requiredFeeling: 100, addFeeling: 0 }
    ],
    sex: "female"
  },
  uryu: {
    name: "우류",
    feeling: 0,
    fatigue: 100,
    actionCount: 0,

    build: 1,
    patrol: 2,
    develop: 14,

    clearPatrolCount: 0,
    clearValue: [
      { regionNo: 0, requiredFeeling: 20, addFeeling: 10 },
      { regionNo: 0, requiredFeeling: 40, addFeeling: 10 },
      { regionNo: 0, requiredFeeling: 60, addFeeling: 10 },
      { regionNo: 0, requiredFeeling: 80, addFeeling: 10 },
      { regionNo: 0, requiredFeeling: 100, addFeeling: 0 }
    ],
    sex: "male"
  }
};
