function plus(p1, p2){
    return p1 + p2 ;
}

//arrow function
const minus = (p1, p2) => {
    return p1 - p2;
}
//div , multi 이름으로 arrow func 2개 추가

const multi = (p1, p2) => {
    return p1 * p2;
}

const div = (p1, p2) => {
    return p1 / p2;
}


console.log(plus(3,6));
console.log(minus(3,6));
console.log(div(3,6));
console.log(multi(3,6));