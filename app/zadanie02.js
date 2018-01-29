function logOnTimeout (text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
};

logOnTimeout('Node.js', 4000);
logOnTimeout('się', 1000);
logOnTimeout('Witam', 0);
logOnTimeout('i korzystam', 6000);
logOnTimeout('w konsoli', 5000);
logOnTimeout('z funkcji czasu!', 7000);
logOnTimeout('z', 2000);
logOnTimeout('programem', 3000);