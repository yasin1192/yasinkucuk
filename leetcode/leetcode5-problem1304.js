var sumZero = function(n) {
    let res;
    // if n is odd, return a array with integer pairs: -1,1; -2,2; then add a extra 0
    if (n % 2 === 1) {
        res = [0];
        n = n -1;
    }   else {
        res = [];
    } 
    // if n is even, return a array with integer pairs: -1,1; -2,2
    for (let i=1; i<n/2+1; i++) {
        res.push(i);
        res.push(-i);
    }
    return res;
};