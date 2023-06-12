class Car {
    brand = "kia";
    // js에서 필드 선언시 let, var 키워드 없이 선언해야함.

    //생

    // Car(color) {
    //     this.color = color;
    // }
    // js에서는 위의 생성자 형식이 아니다.

    // 아래가 생성자 형식
    // constructor(name) {
    //     this.name = name;
    // }
    // js에서 생성자는 하나만 가능.(따라서 위임, 오버로드 불가)

    constructor(name, color, speed) {
        this.name = name;
        this.color = color;
        this.speed = speed;
    }
    // 따로 필드 선언 필요없이, 생성자에서 필드 선언 가능.

    run = function gogo() {
        console.log("달린다");
    }
    // 이것은 필드명 run에 함수를 할당한 것.


    //메
    testMethod() {
        console.log("멈춘다.");
    }
    // js에서 메서드 선언시 함수 키워드 function 없이 사용해야함.
      
}

// console.log(new Car());
// console.log(typeof (new Car()));

// let car = new Car();
// console.log(car);
// console.log(typeof car);

// let myCar = new Car("black");
// console.log(myCar.color);

let car2 = new Car("k2", "red", 150);
console.log(car2.name);

let car3 = new Car("제네시스");
console.log(car3);

car3.run();
console.log(typeof car3.run);

car3.testMethod();

// js 기본 함수선언
// function hello() {
//     console.log(123);
// }

// hello();

let wow = function kor() {
    console.log(54321);
}
wow();
// kor();
// 변수에 함수 할당 시, 함수명으로 직접 호출 불가.
// 변수를 통해서 호출해야 함.

console.log(car3.brand);