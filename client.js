const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );

// The `name` property should contain the employee's name.
//name = string 
//employees.name

// The `bonusPercentage` property should contain the bonus percentage the employee is to receive. See section below for calculation instructions.

//bonusPercentage = number

// The `totalCompensation` property should be the adjusted annual compensation (base annual + bonus)

//annualSalary + annualSalary * bonus percentage

// The `totalBonus` should be the employee's total bonus rounded to the nearest dollar.

//annualSalary * bonus

/* function EmployeeBonuses(employeesName, bonusPercentage, totalCompensation) {
  this.name = employeesName;
  this.percentage = bonusPercentage;
  console.log (`This name is ${this.name}`);
  console.log('This is the function');
  console.log(object);
} */

// let bonus = 0;

// function EmployeeBonuses(employees){
  
//   for (i=0; i<employees.length; i++){
//     if(employees[i].reviewRating <= 2){
//       bonus = 0;
//       console.log(employees[i].name, bonus);
//     }
//     else if(employees[i].reviewRating === 3){
//       if (employees[i].employeeNumber.length >= 4) {
//         bonus = employees[i].annualSalary * 0.09;
//       }
//         bonus = employees[i].annualSalary * 0.04;
//       console.log(employees[i].name, bonus);
//     }
//     else if (employees[i].reviewRating === 4) {
//       bonus = employees[i].annualSalary * .06;
//       console.log(employees[i].name, bonus);
//     }
//     else if (employees[i].reviewRating === 5) {
//       bonus = employees[i].annualSalary * .1;
//       console.log(employees[i].name, bonus);
//     }
//     else if (employees[i].employeeNumber.length >= 4){

//      }

    
//   }
//   return bonus;
  
// }

// console.log( 'Bonus is:', EmployeeBonuses( employees ) );


//Mary's solution - 

//SKELATON

console.log(employees);

function getBonusInfo(someEmployee) {
let bonusPercentage = getBonusPercentage(someEmployee);
//TO DO: ANNUAL SALARY MIGHT BE STRING - FIX LATER
let employeeAnnual = someEmployee.annualSalary;
let totalBonus = bonusPercentage/100 * employeeAnnual;
let totalCompensation = totalBonus + employeeAnnual;
let result = {
  name: someEmployee.name,
  bonusPercentage: totalBonus,
  totalCompensation: totalCompensation,
  totalBonus: totalBonus
}
return result;
}

function getBonusPercentage(someEmployee) {
  let percentage = 0;
  let rating = someEmployee.reviewRating;
  if (rating <= 2) {
    return percentage;
  }
  if (rating === 3 ) {
   percentage = 4;
  }
  else if (rating === 4) {
    percentage = 6;
  }
  else if (rating === 5) {
    percentage = 10;
  }

  if (someEmployee.employeeNumber.length === 4) {
    percentage = percentage + 5;
  }

  if (Number(someEmployee.annualSalary) > 65000 ) {
    percentage = percentage - 1;
  }

  if (percentage > 13) {
    percentage = 13;
  } else if (percentage < 0) {
    percentage = 0;
  }

  return percentage;


}

for (let i = 0; i <employees.lenth; i++ ) {
let bonusInfo = getBonusInfo(employees[i]);
console.log(`Bonus info for ${employees[i].name}:`, bonusInfo);
}



console.log(getBonusInfo(employees[1]));