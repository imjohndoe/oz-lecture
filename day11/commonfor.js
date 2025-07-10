console.log("0부터 4까지 콘솔 찍는 코드");
for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("1부터 5까지 콘솔 찍는 코드");
for (let i = 1; i < 6; i++) {
  console.log(i);
}

console.log("1부터 10까지 홀수만찍는 코드");
for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

console.log("중첩반복문");
for (let i = 0; i < 2; i++) {
  console.log(`i:${i}`);
  for (let k = 0; k < 2; k++) {
    console.log(`k:${k}`);
  }
}

console.log("continue문");
for (let i = 0; i <= 10; i += 2) {
  if (i === 0) {
    continue;
  }
  console.log(i);
}

console.log("break문");
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

console.log("continue문");
for (let i = 0; i < 10; i++) {
  if (i === 5) continue;
  console.log(i);
}

console.log("for문과 array배열");
let arr = ["a", "b", "c"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("for in 배열");
for (idx in arr) {
    console.log(arr[idx]);
}

console.log("for of 배열");
for (item of arr) {
    console.log(item);
}

let obj = {
    name: "철수",
    age: 20,
};
for (let key in obj){
    console.log("key:" , key);
    console.log("val:" , obj[key]);
}
