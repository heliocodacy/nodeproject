function foo1(a, b, a) {
    typeof a === undefined
    console.log("value of the second a:", a);
}

var bar = function (a, b, a) {
    console.log("value of the second a:", a);
};

var damn = function (a, b) {
    console.log("value of the second a:", a);
    return a*b;
    console.log(b);
};

var log = function(message,level) {
    console.log("######## WE ARE LOGGING SOMETHING")
    console.log(message);
};
