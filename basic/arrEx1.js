let arr = [2, 3, 4];
let res = arr.map((item2, index2) => {
    return item2 * item2;
});

// let kor =arr.forEach((item, index) => {
//     console.log(item);
//     return item*2;
// });
// forEach함수는 return값 적용되지 않고 undefined로 나온다.
// 따라서 forEach는 return 사용 x

console.log(res);
