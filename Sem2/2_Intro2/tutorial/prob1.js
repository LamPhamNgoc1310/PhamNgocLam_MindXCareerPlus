// Prob 1
{
    console.log("===Prob 1===");
    const square = number => {
        return Math.pow(number, 2);
    }
    console.log(square(4))
}

// Prob 2
{
    console.log("===Prob 2===");
    const searchFunction = (string, target) => {
        return string.includes(target)
    }

    console.log(searchFunction("Hello, world!", "world"))
}

// Prob 3

{
    console.log("===Prob 3===");
    const prefixFunction = (array, word) => {
        return array.map(number => {
            return `${word}:${number}`
        })
    }
    console.log(prefixFunction([1, 2, 3, 4, 5], "number"))
}


// Prob 4

{
    console.log("===Prob 4===");
    const doubleFunction = (numberArr) => {
        return numberArr.map((value) => value * 2
        )
    }

    console.log(doubleFunction([1, 2, 3, 4]))
}

// Prob 7
{
    console.log("===Prob 7===");
    const employees = [
        { id: 1, name: "John", salary: 2000 },
        { id: 2, name: "Jane", salary: 2500 },
        { id: 3, name: "Mark", salary: 3000 },
    ];

    const highestSalary = (arr) => {
        let max = arr[0];
        arr.forEach((item) => {
            if (item.salary > max.salary) {
                max = item;
            }
        })
        return max;
    }

    console.log(highestSalary(employees))

}

// Prob 7.2
{
    console.log("===Prob 7.2===");
    const employees = [
        { id: 1, name: "John", salary: 2000 },
        { id: 2, name: "Jane", salary: 2500 },
        { id: 3, name: "Mark", salary: 3000 },
    ];
    // Using reduce() 
    const highestSalary = (arr) => {
        return arr.reduce((max, item) => {
            if (item.salary > max.salary) {
                return item;
            }
            return max;
        }, arr[0]);
    }
    console.log(highestSalary(employees))
}

// Prob 9

{
    console.log("===Problem 9===");
    const employees = [
        { id: 1, name: "John", salary: 2000 },
        { id: 2, name: "Jane", salary: 2500 },
        { id: 3, name: "Mark", salary: 3000 },
        { id: 4, name: "John", salary: 2200 },
    ];

    const groupByName = (arr) => {
        const output = {};
        arr.forEach((item) => {
            if (!output[item.name]) {
                output[item.name] = [item];
            }
            else {
                output[item.name].push(item);
            }
        })
        return output;
    }
    console.log(groupByName(employees));
}

// Prob 12
{
    console.log("===Prob 12===");
    const employees = [
        { id: 1, name: "John", email: "john@example.com", workingDays: 22, lateDays: 2, salary: 2000 },
        { id: 2, name: "Jane", email: "jane@example.com", workingDays: 20, lateDays: 0, salary: 2500 },
        { id: 3, name: "Mark", email: "mark@example.com", workingDays: 25, lateDays: 1, salary: 3000 },
    ];

    const listEmployees = (arr) => {
        return arr.map((item) => {
            return {
                name: item.name,
                email: item.email,
                workInfo: {
                    workingDays: item.workingDays,
                    lateDays: item.lateDays,
                }
            }
        })
    }
    console.log(listEmployees(employees));
}

// Prob 5
{
    console.log("===Prob 5===");
    const Odd = (value) => {
        return value % 2 !== 0;
    }

    const numbers = [1, 2, 3, 4, 5];
    const result = numbers.filter(Odd);


    console.log(result);
}

// Prob 6 
{
    console.log("===Prob 6====");
    const employees = [
        { id: 1, name: "John", workingDays: 22 },
        { id: 2, name: "Jane", workingDays: 20 },
        { id: 3, name: "Mark", workingDays: 25 },
    ];
    let sum = 0;
    // This didn't work
    // const EmployeesWorkingDays = (object) => {
    //     sum += object.workingDays;
    //     return sum;
    // }
    // EmployeesWorkingDays(employees)

    for (let i = 0; i < employees.length; i++) {
        sum += employees[i].workingDays;
    }
    console.log(sum);
}

// Prob 7 Use reduce method.
{
    console.log("Prob 7");
    const employees = [
        { id: 1, name: "John", salary: 2000 },
        { id: 2, name: "Jane", salary: 2500 },
        { id: 3, name: "Mark", salary: 3000 },
    ];
    
    const max = Math.max(...employees.salary);
    console.log(max);
}