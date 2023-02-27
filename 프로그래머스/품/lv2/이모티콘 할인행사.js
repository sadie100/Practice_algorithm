function solution(users, emoticons) {
  let result = [0, 0];

  const dfs = (i, dis, userList) => {
    if (i === emoticons.length) {
      let enroll = 0;
      let sales = 0;
      userList.map(([stdPer, stdCost, total]) => {
        if (total >= stdCost) {
          enroll += 1;
        } else {
          sales += total;
        }
      });
      if (result[0] < enroll) {
        result[0] = enroll;
        result[1] = sales;
      } else if (result[0] === enroll) {
        if (result[1] < sales) {
          result[1] = sales;
        }
      }
      return;
    }

    const emoji = emoticons[i];
    const cost = (emoji * (100 - dis)) / 100;

    const newUserList = userList.map(([stdPer, stdCost, total]) => {
      if (dis >= stdPer) {
        return [stdPer, stdCost, total + cost];
      } else {
        return [stdPer, stdCost, total];
      }
    });

    for (let dis of [10, 20, 30, 40]) {
      dfs(i + 1, dis, newUserList);
    }
  };

  for (let dis of [10, 20, 30, 40]) {
    let defUser = users.map(([per, cost]) => {
      return [per, cost, 0];
    });
    dfs(0, dis, defUser);
  }

  return result;
}
