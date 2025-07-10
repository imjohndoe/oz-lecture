// 사용자 입력
let inputStr = prompt("Enter the number of (1-10)");
let input = Number(inputStr);


//유효하지 않은 입력(숫자 아님, 1~10 외)은 에러 메시지 출력 후 재입력 요청.
//while을 사용하여 유효한 입력을 받을 때까지 반복.
while (isNaN(input) || input < 1 || input > 10 || !Number.isInteger(input)) {
  inputStr = prompt("Enter the number of (1-10)");
  console.log(`[입력: ${input}] Invalid input! Enter a number between 1 and 10.`);
  input = Number(inputStr);
}

const maxStars = 10; //별 최대개수
// 함수 선언문: 별 출력 함수
function printStars(input) {
  if (input <= 0) {
    input = 1; // 매개변수 기본값: 입력이 0 또는 음수일 경우 기본값 1 사용
  }
  var stars = "";
  for (let i = 0; i < input; i++) {
    stars += "*";
  }
  console.log(`[입력: ${input}] ${stars}`);
}
printStars(input);