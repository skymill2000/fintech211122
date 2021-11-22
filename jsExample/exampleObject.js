let car = {
    name : "bmw",
    ph : 500,
    start : function() {
        console.log("engine start");
    },
    stop : function(){
        console.log("engine stop");
    }
}

//in java
// class {...} public Car car = new Car();
console.log(car.name);
//자동차 오브젝트에 start 를 실행해주세요!
car.start();
console.log(car.start);
