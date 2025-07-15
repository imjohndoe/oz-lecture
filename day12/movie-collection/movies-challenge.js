const DEFAULT_GENRE = "Unknown";
const FILTER_GENRE = "드라마";

let movies = [
  {
    title: "슈퍼맨",
    director: "제임스 건",
    year: "2025",
    genre: "액션",
  },
  {
    title: "장고:분노의 추격자",
    director: "",
    year: "2013",
    genre: "드라마",
  },
  {
    title: "메멘토",
    director: "크리스토퍼 놀란",
    year: "2001",
    genre: "범죄",
  },
  {
    title: "인사이드아웃",
    director: "피트 닥터",
    year: "2015",
    genre: "애니메이션, 드라마",
  },
];
// 영화 객체 2개 하드코딩 (var사용)

const movie1 = {
    title: "var1",
    director: "var1 감독",
    year: "2100",
    genre: "",
};

const movie2 = {
    title: "2var2",
    director: "var2 감독",
    year: "220",
    genre: "스릴러",
};

movies.push(movie1);
movies.push(movie2);

// 1개의 객체 하드코딩으로 추가
movies.push({
    title: "",
    director: "var30 감독",
    year: "3001",
    genre: "역사",

})


function printMovie(index,title,director = "Unknown",year,genre){
    console.log(`${index}. Title:${title}, Director:${director}, Year:${year}, Genre:${genre}`)
}
function printMovies(movies){
    console.log(`Movie Collection:`)
    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i];
        if (!movie.title) movie.title = "Unknown";
        printMovie(i+1, movie.title, movie.director, movie.year, movie.genre);
    }
    console.log(`Total Movies: `,movies.length)
}
// 하단부턴 도전과제 //
///특정과제 "드라마"의 영화만 출력해보자///

const printTotalMovies = (movies) => {
  // Total Movies: [총 영화 수]
  console.log(`Total Movies: ${movies.length}`);
};

const printStatistics = (movies) => {
    // 평균 출판년도
    let avgYear =0;
    for (const movie of movies) {
        avgYear += Number(movie.year);
    }
    avgYear = avgYear / movies.length


//최신영화 찾기
let lastyear = 0;
let lastTitle = "";
movies.forEach((movie) => {
    lastTitle = movie.title;
    lastyear = movie.year;
});
console.log(`Statistics:
    average Year: ${avgYear}
    Newest Movie: ${lastTitle} (${lastyear})
    `);
};

printMovies(movies);
printTotalMovies(movies);
printStatistics(movies);