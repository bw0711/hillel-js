const { myCompany } = require("./helpers/companyData");

const countTotalSalary = (employees) => {
    return Object.values(employees).reduce((acc, sub) => {
        if (Array.isArray(sub)) {
            return acc + sub.reduce((sum, emp) => sum + emp.salary, 0);
        }
        if (sub && sub.salary) {
            return acc + sub.salary;
        }
        return acc + countTotalSalary(sub);
    }, 0);
};

console.log(countTotalSalary(myCompany));