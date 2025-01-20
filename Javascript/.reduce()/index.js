// .reduce() <-- reduce the element of an array to single value

const prices = [1, 5,15, 14, 35, 5];

const total = prices.reduce(sum);

function sum(accumulator, nextElement){
    return accumulator + nextElement;
}

console.log(`${total.toFixed(2)}€`);  // <<--- toFixed(2) --> 1154.00€

