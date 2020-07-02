
// array declaration
// @ts-ignore
let reviews: number[] = [5, 5, 4.5, 1, 3];
// @ts-ignore
let total: number = 0;
for(let i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}

// @ts-ignore
let average: number = total / reviews.length;
console.log("Review average = " + average)

// @ts-ignore
let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
for(let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}

for(let sport of sportsOne)
    console.log(sport)

for(let sport of sportsOne) {
    if (sport == "Cricket") {
        console.log(sport + " << My favorite");
    } else {
        console.log(sport);
    }
}


let sportsTwo: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
sportsTwo.push("Baseball");
sportsTwo.push("Football");
for(let sport of sportsTwo) {
    console.log(sport);
}


