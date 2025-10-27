## Variables and Functions
- In this activity, you will solve more coding challenges that involve creating and manipulating variables, using functions with multiple parameters, and handling conditional logic. The tasks will focus on making your functions more flexible and reusable, a skill that will be crucial for larger projects.

## instrutions
# Task 1: Flexible String Manipulation with Functions

- Create a function called formatFullName that takes two parameters: firstName and lastName. The function should return the full name in the format lastName, firstName.
Format the firstName and lastName so that the first letter of each is always capatilized.
Add a condition that checks if either the first or last name is missing. If so, return a string saying “Invalid name input.”

# Task 2: Mathematical Operations with Multiple Parameters

- Write a function called calculateTotalCost that takes three parameters: price, quantity, and taxRate.
The function should calculate the total cost of items, including tax. Use the formula: totalCost = (price * quantity) * (1 + taxRate).
Ensure that price, quantity, and taxRate are all valid numbers. If any are invalid, return a string: “Invalid input.”

# Task 3: Functions with Conditional Logic

- Write a function called checkEligibility that takes two parameters: age and isEmployed. The function should check if a person is eligible for a program based on the following rules:
If the person is over 18 and employed, they are eligible.
If the person is over 18 but unemployed, they are conditionally eligible.
If the person is 18 or younger, they are not eligible.
Return an appropriate string message for each scenario.

# Task 4: Refactoring for Reusability

- Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter. If the discount is provided, the function should subtract the discount from the total cost before applying tax.
If no discount is provided, calculate the total cost as before.

## Reflection
1. How did you approach creating more flexible functions with parameter?
- By adding a discount parameter and using an if loop statement to handle it. 

2. What challenges did you face while incorporating conditional logic in your functions?
- Had challenges formatting the names so first letters always come back capatilized. Turns out I had return `${lastName}, ${firstName}` instead of return `${formattedLast}, ${formattedFirst}`.

3. How does refactoring improve the readability and maintainability of your code?
- I kept my code clean as I went. It helped me stay organized and made fuctions easier to read. 