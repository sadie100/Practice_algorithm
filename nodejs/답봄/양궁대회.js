/*
완전탐색. 재귀 호출

0점에서부터 시작해서 모든 경우를 계산하고, 가장 큰 점수차로 이기는 경우를 리턴한다
최종점수 차를 따로 저장하고 그보다 커질 때마다 갱신.

라이언은 각 점수에서 어피치의 화살 개수보다 1개 더 맞히거나, 아예 안 맞히거나 둘 중 하나만 한다고 가정한다
각 점수에서 생길 수 있는 경우 : 라이언이 어피치+1개만큼 쏘거나, 아예 안 쏘거나 둘 중 하나

*/

function solution(n, info) {
  let maxScoreDif = 0;
  let ryanShot = [-1];
  const defaultRyanShotArr = new Array(11).fill(0);

  const getArrow = (
    ryanScore,
    apeachScore,
    ryanShotCount,
    targetNow,
    ryanShotArr
  ) => {
    if (ryanShotCount > n) {
      //라이언이 쏜 화살 수가 n개를 넘어갈 경우
      return;
    }

    if (targetNow > 10) {
      //10점까지 다 탐색한 경우
      if (ryanShotCount < n) {
        ryanShotArr[10] = n - ryanShotCount;
      }
      const scoreDif = ryanScore - apeachScore;
      if (scoreDif > maxScoreDif) {
        maxScoreDif = scoreDif;
        ryanShot = ryanShotArr;
      }
      return;
    }

    const apeachShot = info[10 - targetNow];

    //1. 라이언이 화살 맞히는 경우
    const newShotArr = [...ryanShotArr];
    newShotArr[10 - targetNow] = apeachShot + 1;
    getArrow(
      ryanScore + targetNow,
      apeachScore,
      ryanShotCount + apeachShot + 1,
      targetNow + 1,
      newShotArr
    );

    //2. 라이언이 안 쏘는 경우
    if (apeachShot === 0) {
      //어피치도 안 쏜 경우
      getArrow(
        ryanScore,
        apeachScore,
        ryanShotCount,
        targetNow + 1,
        ryanShotArr
      );
    } else {
      //어피치만 쏜 경우(어피치 점수 획득)
      getArrow(
        ryanScore,
        apeachScore + targetNow,
        ryanShotCount,
        targetNow + 1,
        ryanShotArr
      );
    }
  };

  getArrow(0, 0, 0, 0, defaultRyanShotArr);

  return ryanShot;
}
