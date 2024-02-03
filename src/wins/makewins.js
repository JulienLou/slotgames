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
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 1 && randNum <= 2){ // (A1 B1 C1 D1 E1) fig.2
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 2 && randNum <= 3){ // (A3 B3 C3 D3 E3) fig.3
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }

  else if(randNum > 3 && randNum <=6){ // (A1 B2 C3 D2 E1) fig.4
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 6 && randNum <= 9){ // (A3 B2 C1 D2 E3) fig.5
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }
  
  else if(randNum > 9 && randNum <= 12){ // (A1 B1 C2 D3 E3) fig.6
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }
  else if(randNum > 12 && randNum <= 15){ // (A3 B3 C2 D1 E1) fig.7
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }

  else if(randNum > 15 && randNum <= 18){ // (A2 B1 C1 D1 E2) fig.8
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 18 && randNum <= 21){ // (A2 B3 C3 D3 E2) fig.9
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }

  else if(randNum > 21 && randNum <= 25){ // (A1 B2 C2 D2 E1) fig.10
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 25 && randNum <= 29){ // (A3 B2 C2 D2 E3) fig.11
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }

  else if(randNum > 29 && randNum <= 33){ // (A1 B2 C1 D2 E1) fig.12
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 33 && randNum <= 37){ // (A3 B2 C3 D2 E3) fig.13
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }

  else if(randNum > 37 && randNum <= 41){ // (A2 B1 C2 D1 E2) fig.14
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 41 && randNum <= 45){ // (A2 B3 C2 D3 E2) fig.15
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }

  else if(randNum > 45 && randNum <= 50){ // (A2 B2 C1 D2 E2) fig.16
    chance(1, 15) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 50 && randNum <= 55){ // (A2 B2 C3 D2 E2) fig.17
    chance(1, 15) && buildPerfectLosingPosition();
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
  else if(randNum > 75 && randNum <= 80){ // (A1 B2 C3 D3 E3) fig.44
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }
  else if(randNum > 80 && randNum <= 85){ // (A3 B2 C1 D1 E1) fig.45
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 85 && randNum <= 90){ // (A1 B1 C1 D2 E3) fig.46
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }
  else if(randNum > 90 && randNum <= 95){ // (A3 B3 C3 D2 E1) fig.47
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 95 && randNum <= 100){ // (A1 B3 C1 D3 E1) fig.48
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 100 && randNum <= 105){ // (A3 B1 C3 D1 E3) fig.49
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }
  else if(randNum > 105 && randNum <= 110){ // (A1 B3 C3 D3 E1) fig.50
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 110 && randNum <= 115){ // (A3 B1 C1 D1 E3) fig.51
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }
  else if(randNum > 115 && randNum <= 120){ // (A1 B1 C3 D1 E1) fig.52
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 120 && randNum <= 125){ // (A3 B3 C1 D3 E3) fig.53
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }
  else if(randNum > 125 && randNum <= 130){ // (A2 B3 C2 D1 E2) fig.54
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 130 && randNum <= 135){ // (A2 B1 C2 D3 E2) fig.55
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 135 && randNum <= 140){ // (A2 B1 C3 D1 E2) fig.56
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 140 && randNum <= 145){ // (A2 B3 C1 D3 E2) fig.57
    chance(1, 10) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }



  // ----------------------------------------------------------------- Configurations By 4

  else if(randNum > 145 && randNum <= 151){ // (A2 B2 C2 D2) fig.22
    modelRand = allRollers[0][1]; // A2
    let count = 0 //security to ending the while loop
    let replaceId = allRollers[randomIntFromInterval(0, 4)][2];
    while(replaceId === modelRand){
      buildPerfectLosingPosition();
      replaceId = allRollers[randomIntFromInterval(0, 4)][randomIntFromInterval(0, 2)];
      count ++;
      if(count >= 10){
        break;
      }
    }
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(1, 1, replaceId);
  }
  else if(randNum > 151 && randNum <= 157){ // (A1 B1 C1 D1) fig.23
    modelRand = allRollers[0][0]; // A1
    let count = 0 //security to ending the while loop
    let replaceId = allRollers[randomIntFromInterval(0, 4)][2];
    while(replaceId === modelRand){
      buildPerfectLosingPosition();
      replaceId = allRollers[randomIntFromInterval(0, 4)][randomIntFromInterval(0, 2)];
      count ++;
      if(count >= 10){
        break;
      }
    }
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(0, 1, replaceId);
  }
  else if(randNum > 157 && randNum <= 163){ // (A3 B3 C3 D3) fig.24
    modelRand = allRollers[0][2]; // A3
    let count = 0 //security to ending the while loop
    let replaceId = allRollers[randomIntFromInterval(0, 4)][0];
    while(replaceId === modelRand){
      buildPerfectLosingPosition();
      replaceId = allRollers[randomIntFromInterval(0, 4)][randomIntFromInterval(0, 2)];
      count ++;
      if(count >= 10){
        break;
      }
    }
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(2, 1, replaceId);
  }



  // ----------------------------------------------------------------- Configurations By 3

  else if(randNum > 163 && randNum <= 170){ // (A2 B2 C2) fig.25
    chance(1, 3) && buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(1, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
  }
  else if(randNum > 170 && randNum <= 177){ // (A1 B1 C1) fig.26
    modelRand = allRollers[0][0]; // A1
    chance(1, 3) && buildPerfectLosingPosition();
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
  }
  else if(randNum > 177 && randNum <= 184){ // (A3 B3 C3) fig.27
    chance(1, 3) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
  }

  else if(randNum > 184 && randNum <=191){ // (A1 B2 C3) fig.28
    chance(1, 3) && buildPerfectLosingPosition();
    modelRand = allRollers[0][0]; // A1
    allRollers[0].splice(0, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
  }
  else if(randNum > 191 && randNum <= 198){ // (A3 B2 C1) fig.29
    chance(1, 3) && buildPerfectLosingPosition();
    modelRand = allRollers[0][2]; // A3
    allRollers[0].splice(2, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
  }

  // ----------------------------------------------------------------- Configurations Random

  else if(randNum > 198 && randNum <= 220){ // 
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, modelRand);
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, modelRand);
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, modelRand);
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, modelRand);
  }

  
  // ----------------------------------------------------------------- Configurations Almost Gain
  else if(randNum > 220 && randNum <= 240){ // (B2 C2 D2) fig.34
    buildLosingPositionWithDouble();
    modelRand = allRollers[1][1]; // B2
    allRollers[1].splice(1, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
  }
  else if(randNum > 240 && randNum <= 260){ // (B1 C1 D1) fig.35
    buildLosingPositionWithDouble();
    modelRand = allRollers[1][0]; // B1
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
  }
  else if(randNum > 260 && randNum <= 280){ // (B3 C3 D3) fig.36
    buildLosingPositionWithDouble();
    modelRand = allRollers[1][2]; // B3
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
  }

  else if(randNum > 280 && randNum <= 300){ // (B1 C2 D3) fig.37
    buildLosingPositionWithDouble();
    modelRand = allRollers[1][0]; // B1
    allRollers[1].splice(0, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
  }
  else if(randNum > 300 && randNum <= 320){ // (B3 C2 D1) fig.38
    buildLosingPositionWithDouble();
    modelRand = allRollers[1][2]; // B3
    allRollers[1].splice(2, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
  }

  else if(randNum > 320 && randNum <= 340){ // (C2 D2 E2) fig.39
    buildLosingPositionWithDouble();
    modelRand = allRollers[2][1]; // C2
    allRollers[2].splice(1, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
  }
  else if(randNum > 340 && randNum <= 360){ // (C1 D1 E1) fig.40
    buildLosingPositionWithDouble();
    modelRand = allRollers[2][0]; // C1
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(0, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }
  else if(randNum > 360 && randNum <= 380){ // (C3 D3 E3) fig.41
    buildLosingPositionWithDouble();
    modelRand = allRollers[2][2]; // C3
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }

  else if(randNum > 380 && randNum <= 400){ // (C1 D2 E3) fig.42
    buildLosingPositionWithDouble();
    modelRand = allRollers[2][0]; // C1
    allRollers[2].splice(0, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }
  else if(randNum > 400 && randNum <= 420){ // (C3 D2 E1) fig.43
    buildLosingPositionWithDouble();
    modelRand = allRollers[2][2]; // C3
    allRollers[2].splice(2, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[4].splice(0, 1, modelRand);
  }

  // ----- Vertical
  else if(randNum > 420 && randNum <= 430){ // (A1 A2 A3) fig.--
    buildPerfectLosingPosition();
    modelRand = allRollers[0][1]; // A2
    allRollers[0].splice(0, 1, modelRand);
    allRollers[0].splice(1, 1, modelRand);
    allRollers[0].splice(2, 1, modelRand);
  }
  else if(randNum > 430 && randNum <= 440){ // (B1 B2 B3) fig.--
    buildPerfectLosingPosition();
    modelRand = allRollers[1][1]; // B2
    allRollers[1].splice(0, 1, modelRand);
    allRollers[1].splice(1, 1, modelRand);
    allRollers[1].splice(2, 1, modelRand);
  }
  else if(randNum > 440 && randNum <= 450){ // (C1 C2 C3) fig.--
    buildPerfectLosingPosition();
    modelRand = allRollers[2][1]; // C2
    allRollers[2].splice(0, 1, modelRand);
    allRollers[2].splice(1, 1, modelRand);
    allRollers[2].splice(2, 1, modelRand);
  }
  else if(randNum > 450 && randNum <= 460){ // (D1 D2 D3) fig.--
    buildPerfectLosingPosition();
    modelRand = allRollers[3][1]; // D2
    allRollers[3].splice(0, 1, modelRand);
    allRollers[3].splice(1, 1, modelRand);
    allRollers[3].splice(2, 1, modelRand);
  }
  else if(randNum > 460 && randNum <= 470){ // (E1 E2 E3) fig.--
    buildPerfectLosingPosition();
    modelRand = allRollers[4][1]; // E2
    allRollers[4].splice(0, 1, modelRand);
    allRollers[4].splice(1, 1, modelRand);
    allRollers[4].splice(2, 1, modelRand);
  }
  // ----- /Vertical


  // ----------------------------------------------------------------- Configurations Special

  else if(randNum > 470 && randNum <= 570){ // 570 must be set in Slotframe nbChanceHelpToWin
    buildLosingPositionWithDouble();
    const idOfSpecial = 17 // (special.png = id 17)
    allRollers[randomIntFromInterval(0,4)].splice(randomIntFromInterval(0,2), 1, idOfSpecial);
  }
    
  return allRollers;
}

export default makeWins;