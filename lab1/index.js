let processes = [];

let numberOfProcesses = Math.floor(Math.random() * (10 - 5) + 5);

for (let i = 0; i <numberOfProcesses; i++) {
    processes[i] = Math.floor(Math.random() * (30 - 3) + 3);
    console.log(processes[i]);
}

let WT = [0];
let sumWT = 0;

for (let i = 0; i <=numberOfProcesses ; i++) {
    WT[i+1] = processes[i] + WT[i];
    console.log(WT[i]);
    sumWT = sumWT + WT[i];
}

let avrWT = sumWT/numberOfProcesses;
console.log(avrWT);

let processesSorted = processes.sort((number1, number2)=>number1 - number2);

console.log(processesSorted);