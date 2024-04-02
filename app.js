console.log('Hello World!\n==========\n');

// Exercise 1 Section
console.log('EXERCISE 1:\n==========\n');
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  } else {
    continue;
  }
}
// Exercise 2 Section
console.log('EXERCISE 2:\n==========\n');
for (let i = 0; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) output += 'Fizz';
  if (i % 5 === 0) output += 'Buzz';
  console.log(output || i);
}

// Exercise 3 Section
console.log('EXERCISE 3: \n==========\n');
let i = 0;
while (i <= 100) {
  if (i % 2 !== 0) {
    console.log(i);
  }
  i++;
}

// Exercise 3.1 Section
console.log('EXERCISE 3.1: \n==========\n');
let j = 0;
do {
  let output = '';
  if (j % 3 === 0) output += 'Fizz';
  if (j % 5 === 0) output += 'Buzz';
  console.log(output || j);
  j++;
} while (j <= 100);

// Exercise 4 Section
console.log('EXERCISE 4: \n==========\n');
let value = Math.round(Math.random() * 500); // Creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // Creates a random number between 100 and 500

for (let i = 0; i < 0; i++) {
  if ((value = n)) {
    console.log(`Found ${value}!`);
    break;
  } else {
    console.log(`Did not find ${value}!`);
  }
}

// Exercise 5 Section
console.log('EXERCISE 5: \n==========\n');
let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // Create a random number between 1 and 10
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // Create a random number between 1 and 10
let start = Math.round(Math.random() * (10 - 1) + 1); // Create a random number between 1 and 10
let end = Math.round(Math.random() * (1000 - 100) + 100); // Create a random number between 100 and 1000

for (let i = start; i <= end; i++) {
  let output = '';
  if (i % fizzDivisor === 0) output += 'Fizz';
  if (i % buzzDivisor === 0) output += 'Buzz';
  console.log(output || i);
}
