//1
var a = "Hello";
var b = "World!";


console.log(`${a} ${b}`);

//2
const multiply = (a=1,b=1) => console.log(a*b);

multiply(2,7);
multiply(2);

//3
function average () {
	return ([...arguments].reduce((acc,next) => acc+next, 0)/arguments.length)
};

console.log(average(1,2,3));
console.log(average(44,55,26,47,88));

//4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];

console.log(average(...grades));

//5

const data = [1, 4, 'Iwona', false, 'Nowak'];
const [ , , firstName, , lastName] = data;
console.log(firstName, lastName);