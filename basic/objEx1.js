let arr = [52, 273, 32];
console.log(typeof arr);
console.log(arr);

arr.forEach((item, index) => {
    console.log(item, index);

    console.log(arr[index]);
});

let arr2 = new Array(3);

let arr3 = new Array();
// let arr4 = new Array([1,2,3]);
// arr4는 틀린 방식.