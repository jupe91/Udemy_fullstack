function fibonacciGenerator (n) {
        
    var fibonacciArray = [];

    for (var i = 0; i < n; i++ ) {
        if (i === 0 || i === 1) {
            fibonacciArray.push(i);
        } else {
            var valueToAdd = fibonacciArray[i-2] + fibonacciArray[i-1];
            fibonacciArray.push(valueToAdd);
        }
    }
        
    return fibonacciArray;   
}

console.log(fibonacciGenerator(15));
    
    