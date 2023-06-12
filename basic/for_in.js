// console.log(typeof {});

let obj = {
    name : '바나나', 
    price : 12000,
    print : function() {
        console.log(this.price);
    }
};
// console.log(obj);
// console.log(obj.name);
// console.log(obj.price);

// for(let k in obj) {
//     console.log(k, obj[k]);
// }

obj.print();