const STAR = "*";
const DASH = "-";
const PATTERNS = [2, 3, 4, 1, 9, 4, 5];

const getPromptInput = () => {
  let input;
  let isNotValid = true;
    while (isNotValid) {
        let inputStr = prompt("출력할 별 갯수를 입력하세요.");
        input = Number(inputStr);
        if (isNaN(input)) {
            isNotValid = true;
            console.log(
                `[입력: ${inputStr}] Invalid input! This is not number. Please enter number.`
            );
            continue;
        }
      if (input >= 1 && input <= 10){
        isNotValid = false;
    } else {
        console.log(
            `[입력: ${inputStr}] Invalid input! Enter a number between 1 and 10.`
        );
    }

}
return input;
};

const input = getPromptInput();