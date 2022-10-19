/*
info 돌리면서 지원자를 객체 배열로 저장
query 돌리면서 조건문 잘 나눠서, 위 객체에서 해당하는 인원 찾기 -> 반복
*/

function solution(info, query) {
  var answer = [];
  const applicant = [];

  const languageObj = {
    cpp: [],
    java: [],
    python: [],
  };

  const jobObj = {
    backend: [],
    frontend: [],
  };

  const careerObj = {
    junior: [],
    senior: [],
  };

  const foodObj = {
    chicken: [],
    pizza: [],
  };

  info.forEach((apply, idx) => {
    const [language, job, career, food, score] = apply.split(" ");
    languageObj[language].push(idx);
    jobObj[job].push(idx);
    careerObj[career].push(idx);
    foodObj[food].push(idx);

    applicant.push({
      language,
      job,
      career,
      food,
      score: Number(score),
    });
  });

  query.forEach((cond) => {
    const [condLang, condJob, condCareer, foodAndScore] = cond.split(" and ");
    const [condFood, condScore] = foodAndScore.split(" ");
    const condition = [
      condLang,
      condJob,
      condCareer,
      condFood,
      Number(condScore),
    ];
    let applicantTo =
      condLang !== "-"
        ? languageObj[condLang]
        : condJob !== "-"
        ? jobObj[condJob]
        : condCareer !== "-"
        ? careerObj[condCareer]
        : condFood !== "-"
        ? foodObj[condFood]
        : null;
    if (!!applicantTo) {
      const filtered = applicantTo.filter((idx) => {
        const apply = applicant[idx];
        const { language, job, career, food, score } = apply;
        const label = Object.keys(apply);
        let returnedCond = [];
        for (let idx = 0; idx <= condition.length; idx++) {
          let cond = condition[idx];
          if (cond === "-") continue;

          if (idx < 4) {
            if (apply[label[idx]] !== cond) return false;
          } else {
            if (apply[label[idx]] < cond) return false;
          }
        }
        return true;
      }).length;
      answer.push(filtered);
    } else {
      const filtered = applicant.filter((apply) => {
        const { language, job, career, food, score } = apply;
        const label = Object.keys(apply);
        let returnedCond = [];
        for (let idx = 0; idx <= condition.length; idx++) {
          let cond = condition[idx];
          if (cond === "-") continue;

          if (idx < 4) {
            if (apply[label[idx]] !== cond) return false;
          } else {
            if (apply[label[idx]] < cond) return false;
          }
        }
        return true;
      }).length;
      answer.push(filtered);
    }
  });

  return answer;
}
