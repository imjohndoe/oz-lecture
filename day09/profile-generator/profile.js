// 변수 선언
var var1 = "var 변수입니다. let에 밀려 잘 사용하지 않습니다";
let let1 = "요즘 통용되는 변수 설정 방식 let 입니다.";
const con1 = "바뀌지 않는 변수 con 을 설정 합니다.";
console.log("var", var1);
console.log("let", let1);
console.log("const", con1);

//각 변수에 서로 다른 데이터 타입 할당
let number = "10";
let string = "문자열";
let boolean = 100 == 10;
var emptyA;
var emptyB = null;
const user1 = Symbol("theOnlyValue");
const user2 = Symbol("theOnlyValue");
console.log("num", number);
console.log("문자열", string);
console.log("boolean 100 = 10이다?", boolean);
console.log("empty", emptyA);
console.log("symbol", user1);
console.log("symbo2", user2);
console.log("symbol 1 과 2는 같을까?", user1 == user2);

// 문자열 처리
let string2 = "문자열은 큰따옴표(\")나 작은따옴표'로 감싸면 됩니다.";
console.log("string2", string2);
let string3 = "문자열을 한칸 내리고 싶다면 '역슬래시n' \n으로로 감싸면 됩니다.";
console.log("string3", string3);
let string4 = "문자열중 띄어쓰기를 하고 싶다면'역슬래시t'\t로 감싸면 됩니다.";
console.log("string4", string4);

//문자열 연결 (+활용)
let stringContinue = string + number + " = 문자와 숫자를 연결하여 생성";
console.log(stringContinue);

//배열 리터럴 과 출력
let hobbies = ["reading" , "gaming" , "coding"];
console.log("My hobbies: "+hobbies);
console.log("취미의 개수는 " + hobbies.length + "개 네요");

//객체 리터럴
let id = {
    name: "john",
    age: 20 ,
    isStudent: "treu",
}
console.log("제 이름은 " + id.name + ", 나이는 " + id.age + "살 입니다")

//typeof 사용
console.log("'취미-독서'항목의 타입은",typeof hobbies[0]+"이며,'나이'항목의 타입은 "+typeof id.age +"이에요.")

//도전과제 null과 undefined구분
var emptyA;
var emptyB = null;
console.log('emptyA의 타입' ,typeof emptyA);
console.log('emptyB의 타입(null의 타입object가 맞다.' ,typeof emptyB);
console.log('A 와 B는 같을까?' ,null === undefined );

// 템플릿 문자열
console.log(`name:${id.name} , Age:${id.age}`);

//추가 데이터 처리
let scoreboard = {
    firstScore: 40,
    secondScore: 92,
    thirdScore: null,
    forthScore: 37,
};
console.log("scoreboard" , scoreboard);
console.log("scoreboard[thirdScore]" , scoreboard.thirdScore)
console.log("thirdScore의 값은 [", scoreboard.thirdScore ,"]이 맞습니다.");
