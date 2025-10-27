function formatFullName(firstName,lastName) {
    let formattedFirst= firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    let formattedLast= lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    return `${formattedLast}, ${formattedFirst}`
}
console.log(formatFullName("sarb","bhangu"))

function calculateTotalCost (price,quantity,taxRate,discount) {
    let totalCost = ((price * quantity) * (1 + taxRate))
    if (discount) {
        totalCost = ((price * quantity - discount) * (1 + taxRate));}
        else {
            totalCost = ((price * quantity) * (1 + taxRate)); 
        }
    return totalCost
}
console.log(calculateTotalCost(50,2,0.07));
console.log(calculateTotalCost(50, 2, 0.07, 10)); 

function checkEligibility(age,isEmployed){
    if (age > 18 && isEmployed === true)
        return "Eligible"
    else if (age > 18 && isEmployed === false)
        return "Conditionally eligible"
    else 
        return "Not eligible"
}
console.log(checkEligibility(36,true))
console.log(checkEligibility(36,false))
console.log(checkEligibility(16,true))