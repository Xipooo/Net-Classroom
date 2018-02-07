var x = 3;
var y = 6;
var isEven = (x % 2) == 0;
var isDivisibleBy = (y % x) == 0;

var i = 1;
i %= 4;
console.log(i);

if (isDivisibleBy) {
    x++;
    ++x;
    --x;
    x--;
}

if (!(y <= x)) {
    console.log("Is greater");
}
console.log(x);

if (!(y != x)) {
    console.log("It's equal")
}

if (y > x & y < 12) {
    console.log("AND is true");
}

y = 6;
x = 3;
if (y < x & y++ < 12) {
    console.log(y);
}
if (y < x && y++ < 12) {
    console.log(y);
}

function getIf() {
    if (y > x) {
        return y++;
    }
    else {
        return x++;
    }
}
let z;

z = y > x ? y++ : x++;
console.log("z is: " + z);