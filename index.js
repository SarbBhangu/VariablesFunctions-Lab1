function formatFullName(firstName,lastName) {
    let formattedFirst= firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    let formattedLast= lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    return `${formattedLast}, ${formattedFirst}`
}
console.log(formatFullName("sarb","bhangu"))