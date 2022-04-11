let x_o, a, c, m, n;

x_o = +prompt("Enter the seed value x_o: ");

a = +prompt("Enter the constant multiplier a: ");

c = +prompt("Enter the increment c: ");

m = +prompt("Enter the modulus m: ");

n = +prompt("How many random numbers you want to generate: ");

let x_1;
let l = 0, k = 0, inter;
let temp;
let u;
let array = [];
let x = [];

let beg = -2;
let end = 5;

for (let i = 0; i < n; i++) // Лінійно конгруентний алгоритм
{
    x_1 = (a * x_o + c) % m;
    array[i] = x_1 / m;
    x_o = x_1;
}

temp = array[0]; // Оцінка якості випадкових чисел
for (let i = 1; i < n; i++) {
    if (array[i] === temp) {
        l = i + 1;
        break;
    }
}
console.log(`Repeat pseudo-random numbers in value: ${l}`);

for (let i = 0; i < n; i++) {
    u = uniform_distribution_X_i(array[i], beg, end);
    x[i] = uniform_distribution_F_x(u, beg, end);
}

for (inter = beg; inter < end; inter++) {
    for (let i = 0; i < n; i++) {
        for (let i = 0; i < n; i++) {
            if ((x[i] >= inter) && (x[i] < inter + 1))
                k++;
        }
        console.log(`Interval [${inter};${inter + 1}) = ${k}`);
        k = 0;
    }
}

function uniform_distribution_X_i(arg, beg, end) {
    return beg + (arg*(end - beg));
}

function uniform_distribution_F_x(arg, beg, end) {
    return (arg-beg)/(end-beg);
}

