function Kinght() {
  name;
  build;
  patrol;
  develop;
  fatigue;
  feeling;

  clearFeeling; //[20,20,20,20]
  clearAddtionFeeling; //[10,10,10,10]

  count;
}

class World {
  regions;

  curDay;
}

class Region {
  name;
  opened;
  buildings;
  developNumber;
}

class Building {
  name;
  build;

  mental;
  sicence;
  info;

  mentalBuff;
  sicenceBuff;
  infoBuff;

  destroying;
}

reqPatrolTable = [10, 10, 10, 14, 14, 22, 22, 30, 36, 42, 42, 42, 42, 42];
reqDevelopTable = [10, 14, 22, 30];
noodleFatigue = 25;

world = new World();
