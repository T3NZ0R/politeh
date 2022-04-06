let processes = [];

let numberOfProcesses = 5;

for (let i = 0; i < numberOfProcesses; i++) {
    processes[i] = Math.floor(Math.random() * (30 - 3) + 3);
}
console.log("Processes:");
console.log(processes);

console.log("---------------------------------");
//-------------------------------------------------------------------------------------------

let WT = [0];
let sumWT = 0;

for (let i = 0; i <= numberOfProcesses - 1; i++) {

    WT[i + 1] = processes[i] + WT[i];
    sumWT = sumWT + WT[i];
}

let avrWT = (sumWT / numberOfProcesses).toFixed(1);
console.log("FCFS algorithm");
console.log(WT);

console.log("Result = " + avrWT);

console.log("---------------------------------");
//-------------------------------------------------------------------------------------------

let processesSorted = processes.sort((number1, number2) => number1 - number2);
console.log("SJF algorithm");
console.log(processesSorted);

sumWT = 0;

for (let i = 0; i <= processesSorted.length-1; i++) {
    sumWT = sumWT + processesSorted[i];
}

avrWT = (sumWT / numberOfProcesses).toFixed(1);

console.log("Result = " + avrWT);
console.log("---------------------------------");

//-------------------------------------------------------------------------------------------




