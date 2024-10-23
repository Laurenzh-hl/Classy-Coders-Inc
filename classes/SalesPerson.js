const { Employee } = require("./Employee");

class SalesPerson extends Employee {
#totalSales = 0;

constructor (name, position, salary, clients) {
    super(name, position, salary);
    this.clients = clients;
}

getSalesNumber() {
    return this.#totalSales;
}

makeSale(amount) {
    this.#totalSales += amount;
}


    
}

module.exports = {
    SalesPerson,
}