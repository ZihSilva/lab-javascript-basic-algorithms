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

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let driversName = " ";
for (let i = 0; i < hacker1.length; i++) {
    driversName += hacker1[i].toUpperCase() + " ";
}
console.log(driversName.trim());

let navigatorsName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    navigatorsName += hacker2[i];
}
console.log(navigatorsName);

hacker1 = hacker1.toLowerCase();
hacker2 = hacker2.toLowerCase();

if (hacker1 > hacker2) {
    console.log("The driver's name goes first.")
} else if (hacker1 < hacker2) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?");
}