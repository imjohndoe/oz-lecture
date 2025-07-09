//사용자 입력
let inputStr = prompt("점수를 입력하세요.");
//숨긴 코드 console.log(inputStr);
let input = parseInt(inputStr);
//숨긴 코드 console.log("inputscore = ", input);

// 입력값이 0보다 작고 100보다 클경우 오류 메세지.
if (isNaN(inputStr) || inputStr < 0 || inputStr > 100) {
  console.log("Invalid score! Please enter a number between 0 and 100.");
}

const maxScore = 105;
let totalScore;
var rating;

// 최종점수 계산(5점 추가))
totalScore = input + 5;
console.log("Final Score: ", totalScore);

// 등급 결정 (if문)
if (totalScore >= 100) {
  rating = "S";
  console.log("Grade: ", rating);
} else if (totalScore >= 90 && totalScore < 100) {
  rating = "A";
  console.log("Grade: ", rating);
} else if (totalScore >= 80 && totalScore < 90) {
  rating = "B";
  console.log("Grade: ", rating);
} else if (totalScore >= 70 && totalScore < 80) {
  rating = "C";
  console.log("Grade: ", rating);
} else if (totalScore >= 60 && totalScore < 70) {
  rating = "D";
  console.log("Grade: ", rating);
} else {
  rating = "F";
  console.log("Grade: ", rating);
}

// 합격/불합격 여부 결정 (삼항연산자))
var acceptanceScore = totalScore >= 60 ? "pass" : "fail";
console.log("Status: ", acceptanceScore);

// 등급에 따른 console.log() 출력 (switch문)
var ratingMessage = {
  S: "Super!!",
  A: "Excellent work!",
  B: "Good job",
  C: "Satisfactory performance.",
  D: "Needs improvement.",
  Defalut: "Please try harder!",
};
switch (rating) {
  case "S":
    console.log("message: " + ratingMessage.S);
    break;
  case "A":
    console.log("message: " + ratingMessage.A);
    break;
  case "B":
    console.log("message: " + ratingMessage.B);
    break;
  case "C":
    console.log("message: " + ratingMessage.C);
    break;
  case "D":
    console.log("message: " + ratingMessage.D);
    break;
  default:
    console.log("message: " + ratingMessage.Defalut);
    break;
}
//2025-07-09 일로 부터 점수 조정이 들어갑니다.
console.log("---2025-07-09로 부터 점수 조정이 들어갑니다.---");
console.log("---수정된 점수는 다음과 같습니다.---");

// 단항 산술 점수조정 1점 증가 후 5점 보너스 추가.
totalScore++;
totalScore += 5;
// 점수 스케일링
totalScore *= 1.1;
if (totalScore > 100) {
  totalScore = 100;
}

//최종-Final Score
console.log("Final Score: ", totalScore.toFixed(1));

console.log(typeof totalScore)

//최종-Grade
if (totalScore == 100) {
  rating = "S";
  console.log("Grade: ", rating);
} else if (totalScore >= 90 && totalScore < 100) {
  rating = "A";
  console.log("Grade: ", rating);
} else if (totalScore >= 80 && totalScore < 90) {
  rating = "B";
  console.log("Grade: ", rating);
} else if (totalScore >= 70 && totalScore < 80) {
  rating = "C";
  console.log("Grade: ", rating);
} else if (totalScore >= 60 && totalScore < 70) {
  rating = "D";
  console.log("Grade: ", rating);
} else {
  rating = "F";
  console.log("Grade: ", rating);
}

//최종-status
var acceptanceScore = totalScore >= 60 ? "pass" : "fail";
console.log("Status: ", acceptanceScore);

//최종-message- Grade변환은 도전과제를 따르지 않음.
var ratingMessage = {
  S: "perfect Score!",
  A: "Excellent work!",
  B: "Good job",
  C: "Satisfactory performance.",
  D: "Needs improvement.",
  Defalut: "Please try harder!",
};
switch (rating) {
  case "S":
    console.log("message: " + ratingMessage.S);
    break;
  case "A":
    console.log("message: " + ratingMessage.A);
    break;
  case "B":
    console.log("message: " + ratingMessage.B);
    break;
  case "C":
    console.log("message: " + ratingMessage.C);
    break;
  case "D":
    console.log("message: " + ratingMessage.D);
    break;
  default:
    console.log("message: " + ratingMessage.Defalut);
    break;
}
