let mathsMark = Number(prompt("Enter your maths mark"));//prompt returns string, we have to convert it to number
let physicsMark = Number(prompt("Enter your physics mark"));
let chemistryMark = Number(prompt("Enter your chemistry mark"));
let biologyMark = Number(prompt("Enter your biology mark"));
let csMark = Number(prompt("Enter your CS mark"));

let totalMarks = getTotal(mathsMark, physicsMark, chemistryMark, biologyMark, csMark);//function call to find total marks

let average = getAverage(totalMarks);//function call to find average marks

if (average >= 90) {
    alert(`Congrats!!! You have awarded A+ grade.\nYour total mark is ${totalMarks}, average is ${average}`)
} else if (average >= 80 && average < 90) {
    alert(`Congrats!!! You have awarded A grade.\nYour total mark is ${totalMarks}, average is ${average}`)
} else if (average >= 70 && average < 80) {
    alert(`You have awarded B grade.\nYour total mark is ${totalMarks}, average is ${average}`)
} else if (average >= 60 && average < 70) {
    alert(`You have awarded C grade.\nYour total mark is ${totalMarks}, average is ${average}`)
} else if (average >= 50 && average < 60) {
    alert(`You have awarded D grade.\nYour total mark is ${totalMarks}, average is ${average}`)
} else {
    alert(`You have awarded F grade.\nYour total mark is ${totalMarks}, average is ${average}`)
}

// alert(`Your totyal mark is ${totalMarks}`);
// console.log(`total ${totalMarks} and average ${average}`);
// console.log(typeof mathsMark);

//Function to calculate total marks

function getTotal(mathsMark, physicsMark, chemistryMark, biologyMark, csMark) {
    let totalMarks = mathsMark + physicsMark + chemistryMark + biologyMark + csMark;
    return totalMarks;
}

//Function to calculate avearge marks

function getAverage(total) {
    let avg = total/5;
    return avg;
}

