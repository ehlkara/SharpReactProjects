// let first: number = 123; // number
// let second: number = 0x37CF; // hexadecimal
// let third: number = 0o377; // octal
// let fourth: number = 0b111001; // binary
function add(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return a.concat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    throw new Error("Please enter correct types.");
}
console.log(add(2, 3));
console.log(add("Ehlullah", " Karakurt"));
// console.log(add("Ehlullah", 3));
var Customer = /** @class */ (function () {
    function Customer() {
    }
    Customer.prototype.isCreditAllowed = function () {
        return true;
    };
    return Customer;
}());
var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Supplier.prototype.isInShortList = function () {
        return true;
    };
    return Supplier;
}());
function signContract(partner) {
    var message;
    if (partner instanceof Customer) {
        message = partner.isCreditAllowed() ? 'Sign a new contract with the customer' : 'Credit issue';
    }
    if (partner instanceof Supplier) {
        message = partner.isInShortList() ? 'Sign a new contract the supplier' : 'Need to evaluate further';
    }
    return message;
}
var customer = new Customer();
var result = signContract(customer);
console.log(result);
