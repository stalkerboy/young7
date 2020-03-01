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
      { region: "seaLab", requiredFeeling: 20, addFeeling: 10 },
      { region: "seaLab", requiredFeeling: 40, addFeeling: 10 },
      { region: "seaLab", requiredFeeling: 60, addFeeling: 10 },
      { region: "seaLab", requiredFeeling: 80, addFeeling: 10 },
      { region: "seaLab", requiredFeeling: 100, addFeeling: 0 }
    ]
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
      { region: "seaLab", requiredFeeling: 20, addFeeling: 10 },
      { region: "seaLab", requiredFeeling: 40, addFeeling: 10 },
      { region: "seaLab", requiredFeeling: 60, addFeeling: 10 },
      { region: "seaLab", requiredFeeling: 80, addFeeling: 10 },
      { region: "seaLab", requiredFeeling: 100, addFeeling: 0 }
    ]
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
      { region: "seaLab", requiredFeeling: 20, addFeeling: 10 },
      { region: "seaLab", requiredFeeling: 40, addFeeling: 10 },
      { region: "seaLab", requiredFeeling: 60, addFeeling: 10 },
      { region: "seaLab", requiredFeeling: 80, addFeeling: 10 },
      { region: "seaLab", requiredFeeling: 100, addFeeling: 0 }
    ]
  }
};
