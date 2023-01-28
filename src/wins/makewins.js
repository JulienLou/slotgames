import { randomIntFromInterval } from '../helper/helper';

// makeWins()
const makeWins = (allRollers, randNum, basicLosingArray) => {
  
  
  const numA = randomIntFromInterval(3, allRollers.length - 1);
  const numB = randomIntFromInterval(1, 5);
  let modelRand = allRollers[numA][numB];
  
  const buildPerfectLosingPosition = () => { // array ids unique
    allRollers[0].splice(0, 3, basicLosingArray[0], basicLosingArray[1], basicLosingArray[2]);
    allRollers[1].splice(0, 3, basicLosingArray[3], basicLosingArray[4], basicLosingArray[5]);
    allRollers[2].splice(0, 3, basicLosingArray[6], basicLosingArray[7], basicLosingArray[8]);
    allRollers[3].splice(0, 3, basicLosingArray[9], basicLosingArray[10], basicLosingArray[11]);
    allRollers[4].splice(0, 3, basicLosingArray[12], basicLosingArray[13], basicLosingArray[14]);
  }

  const buildLosingPositionWithDouble = () => { // array ids could contains doubles
    allRollers[0].splice(0, 3, basicLosingArray[0], basicLosingArray[1], basicLosingArray[2]);
    allRollers[1].splice(0, 3, basicLosingArray[3], basicLosingArray[4], basicLosingArray[5]);
    allRollers[2].splice(0, 3, basicLosingArray[6], basicLosingArray[7], basicLosingArray[8]);
    allRollers[3].splice(0, 3, basicLosingArray[9], basicLosingArray[10], basicLosingArray[11]);
    allRollers[4].splice(0, 3, basicLosingArray[12], basicLosingArray[13], basicLosingArray[14]);
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, basicLosingArray[0]);
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, basicLosingArray[1]);
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, basicLosingArray[2]);
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, basicLosingArray[3]);
  }

  const chance = (min, max) => {
    return randomIntFromInterval(min, max) === min ? false : true;
  }



  // ----------------------------------------------------------------- Configurations By 5

  if(randNum > 0 && randNum <=1){ // (A2 B2 C2 D2 E2) fig.1
    chance(1, 3) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 1 && randNum <= 2){ // (A1 B1 C1 D1 E1) fig.2
    chance(1, 3) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 2 && randNum <= 3){ // (A3 B3 C3 D3 E3) fig.3
    chance(1, 3) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }

  else if(randNum > 3 && randNum <=6){ // (A1 B2 C3 D2 E1) fig.4
    chance(1, 5) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 6 && randNum <= 9){ // (A3 B2 C1 D2 E3) fig.5
    chance(1, 5) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }
  
  else if(randNum > 9 && randNum <= 12){ // (A1 B1 C2 D3 E3) fig.6
    chance(1, 5) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }
  else if(randNum > 12 && randNum <= 15){ // (A3 B3 C2 D1 E1) fig.7
    chance(1, 5) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }

  else if(randNum > 15 && randNum <= 18){ // (A2 B1 C1 D1 E2) fig.8
    chance(1, 7) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 18 && randNum <= 21){ // (A2 B3 C3 D3 E2) fig.9
    chance(1, 7) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }

  else if(randNum > 21 && randNum <= 25){ // (A1 B2 C2 D2 E1) fig.10
    chance(1, 7) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 25 && randNum <= 29){ // (A3 B2 C2 D2 E3) fig.11
    chance(1, 7) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }

  else if(randNum > 29 && randNum <= 33){ // (A1 B2 C1 D2 E1) fig.12
    chance(1, 7) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 33 && randNum <= 37){ // (A3 B2 C3 D2 E3) fig.13
    chance(1, 7) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }

  else if(randNum > 37 && randNum <= 41){ // (A2 B1 C2 D1 E2) fig.14
    chance(1, 7) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 41 && randNum <= 45){ // (A2 B3 C2 D3 E2) fig.15
    chance(1, 7) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }

  else if(randNum > 45 && randNum <= 50){ // (A2 B2 C1 D2 E2) fig.16
    chance(1, 7) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 50 && randNum <= 55){ // (A2 B2 C3 D2 E2) fig.17
    chance(1, 7) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }

  else if(randNum > 55 && randNum <= 60){ // (A1 B1 C2 D1 E1) fig.18
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 60 && randNum <= 65){ // (A3 B3 C2 D3 E3) fig.19
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }

  else if(randNum > 65 && randNum <= 70){ // (A1 B3 C3 D3 E1) fig.20
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 70 && randNum <= 75){ // (A3 B1 C1 D1 E3) fig.21
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }




  // ----------------------------------------------------------------- Configurations By 4

  else if(randNum > 75 && randNum <= 81){ // (A2 B2 C2 D2) fig.22
    chance(1, 12) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
  }
  else if(randNum > 81 && randNum <= 87){ // (A1 B1 C1 D1) fig.23
    modelRand = allRollers[0][0]; // A1
    chance(1, 12) && buildPerfectLosingPosition();
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
  }
  else if(randNum > 87 && randNum <= 93){ // (A3 B3 C3 D3) fig.24
    chance(1, 12) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
  }



  // ----------------------------------------------------------------- Configurations By 3

  else if(randNum > 93 && randNum <= 100){ // (A2 B2 C2) fig.25
    chance(1, 3) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
  }
  else if(randNum > 100 && randNum <= 107){ // (A1 B1 C1) fig.26
    modelRand = allRollers[0][0]; // A1
    chance(1, 3) && buildPerfectLosingPosition();
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
  }
  else if(randNum > 107 && randNum <= 114){ // (A3 B3 C3) fig.27
    chance(1, 3) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
  }

  else if(randNum > 114 && randNum <=121){ // (A1 B2 C3) fig.28
    chance(1, 3) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
  }
  else if(randNum > 121 && randNum <= 128){ // (A3 B2 C1) fig.29
    chance(1, 3) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
  }

  // ----------------------------------------------------------------- Configurations Random

  else if(randNum > 128 && randNum <= 150){ // 
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, modelRand);
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, modelRand);
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, modelRand);
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, modelRand);
  }

  
  // ----------------------------------------------------------------- Configurations Almost Gain
  else if(randNum > 150 && randNum <= 155){ // (B2 C2 D2) fig.34
    buildLosingPositionWithDouble();
    modelRand = allRollers[1][1]; // B2
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
  }
  else if(randNum > 155 && randNum <= 160){ // (B1 C1 D1) fig.35
    buildLosingPositionWithDouble();
    modelRand = allRollers[1][0]; // B1
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
  }
  else if(randNum > 160 && randNum <= 165){ // (B3 C3 D3) fig.36
    buildLosingPositionWithDouble();
    modelRand = allRollers[1][2]; // B3
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
  }

  else if(randNum > 165 && randNum <= 170){ // (B1 C2 D3) fig.37
    buildLosingPositionWithDouble();
    modelRand = allRollers[1][0]; // B1
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
  }
  else if(randNum > 170 && randNum <= 175){ // (B3 C2 D1) fig.38
    buildLosingPositionWithDouble();
    modelRand = allRollers[1][2]; // B3
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
  }

  else if(randNum > 175 && randNum <= 180){ // (C2 D2 E2) fig.39
    buildLosingPositionWithDouble();
    modelRand = allRollers[2][1]; // C2
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 180 && randNum <= 185){ // (C1 D1 E1) fig.40
    buildLosingPositionWithDouble();
    modelRand = allRollers[2][0]; // C1
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 185 && randNum <= 190){ // (C3 D3 E3) fig.41
    buildLosingPositionWithDouble();
    modelRand = allRollers[2][2]; // C3
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }

  else if(randNum > 190 && randNum <= 195){ // (C1 D2 E3) fig.42
    buildLosingPositionWithDouble();
    modelRand = allRollers[2][0]; // C1
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }
  else if(randNum > 195 && randNum <= 200){ // (C3 D2 E1) fig.43
    buildLosingPositionWithDouble();
    modelRand = allRollers[2][2]; // C3
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }


  // ----------------------------------------------------------------- Configurations Special

  else if(randNum > 200 && randNum <= 250){ // 
    buildLosingPositionWithDouble();
    const idOfSpecial = 17 // (special.png = id 17)
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, idOfSpecial);
  }
    
  return allRollers;
}

export default makeWins;