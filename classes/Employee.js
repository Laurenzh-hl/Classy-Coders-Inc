class Employee {
    static allEmployees = [];
#salary;
#isHired = true;
constructor (name, position, salary) {
    this.name = name;
    this.position = position;
    this.#salary = salary;
    Employee.allEmployees.push(this);
}

getSalary() {
    return this.#salary;
}

setSalary(amount) {
    this.#salary = amount;
}

getStatus() {
    return this.#isHired;
}

setStatus(command) {
    if (command === "hire") {
        this.#isHired = true;
    } else if ( command === "fire") {
        this.#isHired = false;
    }
}

static getEmployees() {
    return Employee.allEmployees;
}

static getTotalPayroll() {
    let sum = 0;
    for (let employee of Employee.allEmployees){
        sum += employee.getSalary();
    }
    return sum;
}

}

module.exports = {
    Employee,
}
