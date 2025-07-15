const timerInput = document.getElementById("timerInput");
const startButton = document.getElementById("startTimer");
const timerDisplay = document.getElementById("timerDisplay");

const MAX_TIME = 10;
let countdown; // setInterval 핸들

startButton.addEventListener("click", () =>{
    let time = Number(timerInput.value);
// 입력 유효성
if (!time || isNaN(time) || time < 1 || time > MAX_TIME ) {
    timerDisplay.style.color ='red';
    timerDisplay.textContent  = '⚠︎ 1 ~ 10 사이의 숫자를 입력하세요.';
    return;
}

startButton.disabled = true; //버튼 비활성화
timerDisplay.textContent = `${time}초 남았습니다.`;

countdown = setInterval( () => {
time--;
if (time > 0) {
    timerDisplay.textContent = `${time}초 남았습니다.`;
}   else {
    clearInterval(countdown);
    timerDisplay.textContent = "⛄︎타이머 종료!";
    startButton.disabled = false; // 타시 버튼 활성화
}
}, 1000);
});

// Enter키로 입력 완료 코드
timerInput.addEventListener("keydown", (event) => {
    if(event.key === "Enter"){
        startButton.click();
    }
});
