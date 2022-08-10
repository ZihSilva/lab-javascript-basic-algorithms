console.log("I'm ready!");

// Iteration 1: Names and Input


let hacker1 = "WALTER WHITE";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "JESSE PINKMAN";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals


if (hacker1.length > hacker2.length) {
console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else if (hacker1.length === hacker2.length) {
console.log(`Wow, you both have equally long names, ${hacker1.length} `);
}

// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.