console.log(Math.random()*60); //random less than 60
console.log(Math.floor(Math.random()*100)) // 1 to 100

console.log(Math.ceil(-0.70001)); //-0 Negative zero is a valid representation of zero in IEEE floating-point arithmetic, and it behaves similarly to positive zero in most cases. However, when directly logged, JavaScript usually displays -0 as 0.
console.log(Math.abs(Math.ceil(-0.70001))); // Output: 0

console.log(Math.ceil(-5.0001)); // -5 Math.ceil() returns the smallest integer greater than or equal to a given number.
console.log(Math.floor(-5.0001));  //-6

//RANDOM NUMBERS IN A RANGE

function generateRandom(min,max){
    return Math.floor(Math.random()*max)+min;
}
console.clear();
for(let i=0;i<10;i++)
console.log(generateRandom(10,20));
console.clear()
for(let i=0;i<10;i++)
{
    console.log(ranNum(10,20));
}

function ranNum(min,max)
{
    return Math.floor(Math.random()*max)+min;
}