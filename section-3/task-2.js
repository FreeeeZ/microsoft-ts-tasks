"use strict";
function calculateInterestOnlyLoanPayment(loanTerms) {
    let interest = loanTerms.interestRate / 1200;
    let payment;
    payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
let interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
console.log(interestOnlyPayment);
function calculateConventionalLoanPayment(loanTerms) {
    let interest = loanTerms.interestRate / 1200;
    let payment;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
let conventionalPayment = calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });
console.log(conventionalPayment);
