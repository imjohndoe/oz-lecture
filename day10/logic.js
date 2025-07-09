
let math = 80;
let avg = 90;
let english = 100;

let isMathLowAvg = math < avg;
console.log("isMathLowAvg" , isMathLowAvg );

let isEnglishLowAvg = english < avg; 
console.log("isEnglishLowAvg" , isEnglishLowAvg );

// AND 연산자  
console.log (isMathLowAvg && isEnglishLowAvg); // True && flase
// OR 연산자
console.log (isMathLowAvg || isEnglishLowAvg); // True || flase

console.log("!true && false" , !true && false)
console.log("true || !true" , true || !true )