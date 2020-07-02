let found: boolean = true;
let grade: number = 88.6;
let fname: string = "David"
let lname: string = 'Vera'

// to avoid compiling errors : tsc -noEmitOnError fileName.ts

console.log(found);
console.log(" the grade is " + grade);
console.log("Hi " + fname + " " + lname);
console.log(`Hi ${fname} ${lname}`);

