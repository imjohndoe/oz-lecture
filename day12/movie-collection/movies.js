const defaultGenre = "Unknown";

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

function dramamovies(){
    for (let i = 0; i < moies.length; i++) {
        let drama = movies[i.genre];
            // if(genre)    
}
}
printMovies(movies)

