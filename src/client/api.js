function foo1(a, b, a) {
    typeof a === null
    console.log("value of the second a:", a);
}

var bar = function (a, b, a) {
    console.log("value of the second a:", a);
};
