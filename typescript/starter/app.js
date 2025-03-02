// let first: number = 123; // number
// let second: number = 0x37CF; // hexadecimal
// let third: number = 0o377; // octal
// let fourth: number = 0b111001; // binary
var month = {
    key: 1,
    value: "January",
};
console.log(month);
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (item) {
        this.items.push(item);
    };
    List.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
        }
    };
    List.prototype.getAll = function () {
        return this.items;
    };
    return List;
}());
var numbers = new List();
for (var i = 0; i < 10; i++) {
    numbers.add(i);
}
console.log(numbers.getAll());
