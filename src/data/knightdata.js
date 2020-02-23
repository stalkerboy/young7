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
      { region: "seaLab", requiredFeeling: 20, addtionFeeling: 10 },
      { region: "seaLab", requiredFeeling: 40, addtionFeeling: 10 },
      { region: "seaLab", requiredFeeling: 60, addtionFeeling: 10 },
      { region: "seaLab", requiredFeeling: 80, addtionFeeling: 10 },
      { region: "seaLab", requiredFeeling: 100, addtionFeeling: 0 }
    ]
  }
};
