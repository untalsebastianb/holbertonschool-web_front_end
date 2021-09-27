function countPrimeNumbers(){
    let numbers = [];
    for(let i = 2; i < 100; i++){
        if(i % 2 != 0){
            numbers.push(i);
        }
    }
    return numbers.length;
}

let start_time = window.performance.now();

countPrimeNumbers();

let end_time = window.performance.now();

console.log("Execution time of printing countPrimeNumbers was " + (end_time - start_time) + " milliseconds.");
