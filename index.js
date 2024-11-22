// 🚀Problem-01 : Tax Calculator code start is here!
function calculateTax(income, expenses) {
    let difference = income - expenses;
    // Check if the inputs are valid 
    if (income < 0 || expenses < 0 || income < expenses) {
        return "Invalid Input";
    }
    let tax = difference * .20;
    return tax;
}

// 🤭Problem-01 : Tax Calculator code end is here!

// 🚀Problem 02 : Notification Generator code start is here!
function sendNotification(email) {
    const [username, domain] = email.split('@');
    // Check if the email contains exactly one @
    if (typeof email !== 'string' ) {
        return "Invalid Email";
    }
    if (!username || !domain) {
        return "Invalid Email";
    }
    else {
        return `${username} sent you an email from ${domain}`;
    }
}
// 😊Problem 02 : Notification Generator code end is here!

// 🚀Problem-03: Checking Digits Inside a Name code start is here

function checkDigitsInName(name) {
    // Check if the input is a string
    if (typeof name !== "string") {
        return "Invalid Input";
    }
    // Checking Inside a name contains any digit
    return /\d/.test(name) ? true : false;
}

// 👌Problem-03: Checking Digits Inside a Name code end is here

// 🚀Problem 04 : Calculate Admission Final Score code start is here!

function calculateFinalScore(obj) {
    const { testScore, schoolGrade, isFFamily } = obj;
    // Check if the input is a valid object
    if (typeof obj !== "object" || obj === null) {
        return "Invalid Input";
    }
    
    // Check if the values are valid
    if (typeof testScore !== "number" || typeof schoolGrade !== "number" || typeof isFFamily !== "boolean") {
        return "Invalid Input";
    }
    let totalScore = testScore + schoolGrade + (isFFamily ? 20 : 0);
    return totalScore >= 80 ? true : false;
}

// ⚡Problem 04 : Calculate Admission Final Score code end is here!

// 🚀Problem 05:  Predict Average Waiting Time code start is here!

function waitingTime(waitingTimes, serialNumber) {
    // Check if the first input is an array and second is a number
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') return "Invalid Input";
    
    const avgTime = Math.round(waitingTimes.reduce((sum, time) => sum + time, 0) / waitingTimes.length);
    let peopleLeft = serialNumber - 1 - waitingTimes.length;
    
    // Return waiting time or 0 if no one is left
    return peopleLeft > 0 ? peopleLeft * avgTime : 0;
}

// 😎 Problem 05:  Predict Average Waiting Time code end is here!