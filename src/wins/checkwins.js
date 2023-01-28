import { countMoreWinningIds, countMajorsIds } from "../helper/helper";

const checkIfPlayerWinsWithIds = (line1, line2, line3) => {
  
  const a1 = line1[0];
  const b1 = line1[1];
  const c1 = line1[2];
  const d1 = line1[3];
  const e1 = line1[4];

  const a2 = line2[0];
  const b2 = line2[1];
  const c2 = line2[2];
  const d2 = line2[3];
  const e2 = line2[4];

  const a3 = line3[0];
  const b3 = line3[1];
  const c3 = line3[2];
  const d3 = line3[3];
  const e3 = line3[4];

  // ----------------------------------------------------------------- Configurations By 5

  if(a2===b2 && a2===c2 && a2===d2 && a2===e2){ // (A2 B2 C2 D2 E2) fig.1
    const moreWinId = countMoreWinningIds(line1, line2, line3, a2, 5);
    return {winningID: a2, valueWin: 100, moreWinId}
  }
  else if(a1===b1 && a1===c1 && a1===d1 && a1===e1){ // (A1 B1 C1 D1 E1) fig.2
    const moreWinId = countMoreWinningIds(line1, line2, line3, a1, 5);
    return {winningID: a1, valueWin: 50, moreWinId}
  }
  else if(a3===b3 && a3===c3 && a3===d3 && a3===e3){ // (A3 B3 C3 D3 E3) fig.3
    const moreWinId = countMoreWinningIds(line1, line2, line3, a3, 5);
    return {winningID: a3, valueWin: 50, moreWinId}
  }

  else if(a1===b2 && a1===c3 && a1===d2 && a1===e1){ // (A1 B2 C3 D2 E1) fig.4
    const moreWinId = countMoreWinningIds(line1, line2, line3, a1, 5);
    return {winningID: a1, valueWin: 12, moreWinId}
  }
  else if(a3===b2 && a3===c1 && a3===d2 && a3===e3){ // (A3 B2 C1 D2 E3) fig.5
    const moreWinId = countMoreWinningIds(line1, line2, line3, a3, 5);
    return {winningID: a3, valueWin: 12, moreWinId}
  }

  else if(a1===b1 && a1===c2 && a1===d3 && a1===e3){ // (A1 B1 C2 D3 E3) fig.6
    const moreWinId = countMoreWinningIds(line1, line2, line3, a1, 5);
    return {winningID: a1, valueWin: 9, moreWinId}
  }
  else if(a3===b3 && a3===c2 && a3===d1 && a3===e1){ // (A3 B3 C2 D1 E1) fig.7
    const moreWinId = countMoreWinningIds(line1, line2, line3, a3, 5);
    return {winningID: a3, valueWin: 9, moreWinId}
  }

  else if(a2===b1 && a2===c1 && a2===d1 && a2===e2){ // (A2 B1 C1 D1 E2) fig.8
    const moreWinId = countMoreWinningIds(line1, line2, line3, a2, 5);
    return {winningID: a2, valueWin: 7, moreWinId}
  }
  else if(a2===b3 && a2===c3 && a2===d3 && a2===e2){ // (A2 B3 C3 D3 E2) fig.9
    const moreWinId = countMoreWinningIds(line1, line2, line3, a2, 5);
    return {winningID: a2, valueWin: 7, moreWinId}
  }

  else if(a1===b2 && a1===c2 && a1===d2 && a1===e1){ // (A1 B2 C2 D2 E1) fig.10
    const moreWinId = countMoreWinningIds(line1, line2, line3, a1, 5);
    return {winningID: a1, valueWin: 7, moreWinId}
  }
  else if(a3===b2 && a3===c2 && a3===d2 && a3===e3){ // (A3 B2 C2 D2 E3) fig.11
    const moreWinId = countMoreWinningIds(line1, line2, line3, a3, 5);
    return {winningID: a3, valueWin: 7, moreWinId}
  }

  else if(a1===b2 && a1===c1 && a1===d2 && a1===e1){ // (A1 B2 C1 D2 E1) fig.12
    const moreWinId = countMoreWinningIds(line1, line2, line3, a1, 5);
    return {winningID: a1, valueWin: 6, moreWinId}
  }
  else if(a3===b2 && a3===c3 && a3===d2 && a3===e3){ // (A3 B2 C3 D2 E3) fig.13
    const moreWinId = countMoreWinningIds(line1, line2, line3, a3, 5);
    return {winningID: a3, valueWin: 6, moreWinId}
  }

  else if(a2===b1 && a2===c2 && a2===d1 && a2===e2){ // (A2 B1 C2 D1 E2) fig.14
    const moreWinId = countMoreWinningIds(line1, line2, line3, a2, 5);
    return {winningID: a2, valueWin: 6, moreWinId}
  }
  else if(a2===b3 && a2===c2 && a2===d3 && a2===e2){ // (A2 B3 C2 D3 E2) fig.15
    const moreWinId = countMoreWinningIds(line1, line2, line3, a2, 5);
    return {winningID: a2, valueWin: 6, moreWinId}
  }

  else if(a2===b2 && a2===c1 && a2===d2 && a2===e2){ // (A2 B2 C1 D2 E2) fig.16
    const moreWinId = countMoreWinningIds(line1, line2, line3, a2, 5);
    return {winningID: a2, valueWin: 5, moreWinId}
  }
  else if(a2===b2 && a2===c3 && a2===d2 && a2===e2){ // (A2 B2 C3 D2 E2) fig.17
    const moreWinId = countMoreWinningIds(line1, line2, line3, a2, 5);
    return {winningID: a2, valueWin: 5, moreWinId}
  }

  else if(a1===b1 && a1===c2 && a1===d1 && a1===e1){ // (A1 B1 C2 D1 E1) fig.18
    const moreWinId = countMoreWinningIds(line1, line2, line3, a1, 5);
    return {winningID: a1, valueWin: 5, moreWinId}
  }
  else if(a3===b3 && a3===c2 && a3===d3 && a3===e3){ // (A3 B3 C2 D3 E3) fig.19
    const moreWinId = countMoreWinningIds(line1, line2, line3, a3, 5);
    return {winningID: a3, valueWin: 5, moreWinId}
  }

  else if(a1===b3 && a1===c3 && a1===d3 && a1===e1){ // (A1 B3 C3 D3 E1) fig.20
    const moreWinId = countMoreWinningIds(line1, line2, line3, a1, 5);
    return {winningID: a1, valueWin: 4, moreWinId}
  }
  else if(a3===b1 && a3===c1 && a3===d1 && a3===e3){ // (A3 B1 C1 D1 E3) fig.21
    const moreWinId = countMoreWinningIds(line1, line2, line3, a3, 5);
    return {winningID: a3, valueWin: 4, moreWinId}
  }



  // ----------------------------------------------------------------- Configurations By 4

  else if(a2===b2 && a2===c2 && a2===d2){ // (A2 B2 C2 D2) fig.22
    const moreWinId = countMoreWinningIds(line1, line2, line3, a2, 4);
    return {winningID: a2, valueWin: 2.5, moreWinId}
  }
  else if(a1===b1 && a1===c1 && a1===d1){ // (A1 B1 C1 D1) fig.23
    const moreWinId = countMoreWinningIds(line1, line2, line3, a1, 4);
    return {winningID: a1, valueWin: 2, moreWinId}
  }
  else if(a3===b3 && a3===c3 && a3===d3){ // (A3 B3 C3 D3) fig.24
    const moreWinId = countMoreWinningIds(line1, line2, line3, a3, 4);
    return {winningID: a3, valueWin: 2, moreWinId}
  }

  else if(b2===c2 && b2===d2 && b2===e2){ // (B2 C2 D2 E2) fig.31
    const moreWinId = countMoreWinningIds(line1, line2, line3, b2, 4);
    return {winningID: b2, valueWin: 1.75, moreWinId}
  }
  else if(b1===c1 && b1===d1 && b1===e1){ // (B1 C1 D1 E1) fig.32
    const moreWinId = countMoreWinningIds(line1, line2, line3, b1, 4);
    return {winningID: b1, valueWin: 1.75, moreWinId}
  }
  else if(b3===c3 && b3===d3 && b3===e3){ // (B3 C3 D3 E3) fig.33
    const moreWinId = countMoreWinningIds(line1, line2, line3, b3, 4);
    return {winningID: b3, valueWin: 1.75, moreWinId}
  }





  // ----------------------------------------------------------------- Configurations By 3

  else if(a2===b2 && a2===c2){ // (A2 B2 C2) fig.25
    const moreWinId = countMoreWinningIds(line1, line2, line3, a2, 3);
    return {winningID: a2, valueWin: 1.5, moreWinId}
  }
  else if(a1===b1 && a1===c1){ // (A1 B1 C1) fig.26
    const moreWinId = countMoreWinningIds(line1, line2, line3, a1, 3);
    return {winningID: a1, valueWin: 1.5, moreWinId}
  }
  else if(a3===b3 && a3===c3){ // (A3 B3 C3) fig.27
    const moreWinId = countMoreWinningIds(line1, line2, line3, a3, 3);
    return {winningID: a3, valueWin: 1.5, moreWinId}
  }

  else if(a1===b2 && a1===c3){ // (A1 B2 C3) fig.28
    const moreWinId = countMoreWinningIds(line1, line2, line3, a1, 3);
    return {winningID: a1, valueWin: 1.25, moreWinId}
  }
  else if(a3===b2 && a3===c1){ // (A3 B2 C1) fig.29
    const moreWinId = countMoreWinningIds(line1, line2, line3, a3, 3);
    return {winningID: a3, valueWin: 1.25, moreWinId}
  }

  else if(b2===c2 && b2===d2){ // (B2 C2 D2) fig.34
    const moreWinId = countMoreWinningIds(line1, line2, line3, b2, 3);
    return {winningID: b2, valueWin: 0.5, moreWinId}
  }
  else if(b1===c1 && b1===d1){ // (B1 C1 D1) fig.35
    const moreWinId = countMoreWinningIds(line1, line2, line3, b1, 3);
    return {winningID: b1, valueWin: 0.5, moreWinId}
  }
  else if(b3===c3 && b3===d3){ // (B3 C3 D3) fig.36
    const moreWinId = countMoreWinningIds(line1, line2, line3, b3, 3);
    return {winningID: b3, valueWin: 0.5, moreWinId}
  }

  else if(b1===c2 && b1===d3){ // (B1 C2 D3) fig.37
    const moreWinId = countMoreWinningIds(line1, line2, line3, b1, 3);
    return {winningID: b1, valueWin: 0.5, moreWinId}
  }
  else if(b3===c2 && b3===d1){ // (B3 C2 D1) fig.38
    const moreWinId = countMoreWinningIds(line1, line2, line3, b3, 3);
    return {winningID: b3, valueWin: 0.5, moreWinId}
  }

  else if(c2===d2 && c2===e2){ // (C2 D2 E2) fig.39
    const moreWinId = countMoreWinningIds(line1, line2, line3, c2, 3);
    return {winningID: c2, valueWin: 0.35, moreWinId}
  }
  else if(c1===d1 && c1===e1){ // (C1 D1 E1) fig.40
    const moreWinId = countMoreWinningIds(line1, line2, line3, c1, 3);
    return {winningID: c1, valueWin: 0.35, moreWinId}
  }
  else if(c3===d3 && c3===e3){ // (C3 D3 E3) fig.41
    const moreWinId = countMoreWinningIds(line1, line2, line3, c3, 3);
    return {winningID: c3, valueWin: 0.35, moreWinId}
  }

  else if(c1===d2 && c1===e3){ // (C1 D2 E3) fig.42
    const moreWinId = countMoreWinningIds(line1, line2, line3, c1, 3);
    return {winningID: c1, valueWin: 0.35, moreWinId}
  }
  else if(c3===d2 && c3===e1){ // (C3 D2 E1) fig.43
    const moreWinId = countMoreWinningIds(line1, line2, line3, c3, 3);
    return {winningID: c3, valueWin: 0.35, moreWinId}
  }


  // ----------------------------------------------------------------- Special Chance

  else if(line1.includes(17) || line2.includes(17) || line3.includes(17)){ // Special win Id17
    return {winningID: 17, valueWin: 0, moreWinId: 0}
  }


  // ----------------------------------------------------------------- 5 identicals or more

  else{
    const identicalID = Number(countMajorsIds(line1, line2, line3)); // find out if there are other identical Ids
    if(identicalID > 0){
      const moreWinId = countMoreWinningIds(line1, line2, line3, identicalID, 5); // fig 30
      return {winningID: identicalID, valueWin: 1, moreWinId}
    }else{
      return false
    }
  }

} 

export default checkIfPlayerWinsWithIds;