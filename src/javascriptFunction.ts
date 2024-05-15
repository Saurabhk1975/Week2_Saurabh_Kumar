// Question 2 solution
const array = [1, 2, 3, 4, 5];

// Map on array (multiply each no of array with itself and store it )



// Filter the array to remove numbers that are not even ( numbers whose modulo 2 is not equal to zero)
export const even = array.filter((num) => num % 2 === 0);
console.log(even);

// here accumulator is total with initial value 0 then we perform sum
export const sum = array.reduce((total, num) => total + num, 0);
console.log(sum);
