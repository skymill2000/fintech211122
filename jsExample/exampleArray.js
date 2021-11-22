let cars = ["bmw", "sonata", "tesla", "tico"];
// console.log(cars);
//java public int [] intArray = new int[5];

// console.log(cars[5]);
// console.log(cars[3]);

for(let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}
console.log("-----of-----")
for (car of cars){
    console.log(car)
}
console.log("-----map-----")
cars.map((car) => {
    console.log(car);
})
