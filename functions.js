// array of objects

let data = [{
    Principal: 2500,
    time: 1.8,
}, {
    Principal: 1000,
    time: 5,
}, {
    Principal: 3000,
    time: 1,
}, {
    Principal: 2000,
    time: 3,
}];
//create a function interestCalculator
function interestCalculator(data) {
    let principal_v, time_v, rate, interest, interestData = [],
        principalData = []; // declear a variable to hold the values
    for (let i = 0; i < data.length; i += 1) {
        principal_v = data[i].Principal; // get the principal value
        time_v = data[i].time; // get the time value
        // rate condition to get rate
        if (principal_v >= 2500 && time_v > 1 && time_v < 3) {
            rate = 3;
        } else if (principal_v >= 2500 && time_v >= 3) {
            rate = 4;
        } else if (principal_v < 2500 || time_v <= 1) {
            rate = 2;
        } else {
            rate = 1;
        }
        //Calculate the interest for each individual object using the formula: (principal * rate * time) / 100.
        interest = (principal_v * rate * time_v) / 100;
        //'interestData' individual object should have 'principal', 'rate', 'time' and 'interest'
        interestData.push({
            'principal': principal_v,
            "rate": rate,
            "time": time_v,
            "interest": interest
        });

    }
    console.log(interestData)
    return interestData
}
//Finally, call/execute the function
interestCalculator(data)