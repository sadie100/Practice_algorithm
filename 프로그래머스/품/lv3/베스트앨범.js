function solution(genres, plays) {
  var answer = [];
  const genreDic = {};
  //genreDic의 각 장르별 music을 채운다.
  genres.map((genre, idx) => {
    if (!genreDic[genre]) {
      genreDic[genre] = {
        music: [idx],
        count: 0,
      };
    } else {
      genreDic[genre].music.push(idx);
    }
  });
  //genreDic의 각 장르별 count를 채운다.
  Object.entries(genreDic).map(([key, { music }]) => {
    const count = music.reduce((acc, cur) => {
      return acc + plays[cur];
    }, 0);
    genreDic[key].count = count;
  });
  //장르별 count로 정렬한 genreArr을 생성한다.
  const genreArr = Object.keys(genreDic).sort(
    (a, b) => +genreDic[b].count - +genreDic[a].count
  );
  //genreArr을 돌리면서 해당하는 장르의 곡들을 정렬, 2개씩 slice하고 answer에 push한다.
  genreArr.map((genre) => {
    const songs = genreDic[genre].music;
    const arr = songs.sort((a, b) => {
      return +plays[b] - +plays[a] || +a - +b;
    });
    answer.push(...arr.slice(0, 2));
  });
  return answer;
}
