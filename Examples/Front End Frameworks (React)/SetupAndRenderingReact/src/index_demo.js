// Const example
const apiKey = 'abc123';
//apiKey = "newKey";
const settings = {
    dpi: 600
}
//settings = { dpi: 1200 };
settings.dpi = 1200;
let i = 1;
i = 2;
//let i = 2;

const product = (x, y) => x * y;

const example = {
    x: 81,
    add: function() {
        return this.x + 1;
    }
}

const traditionalResult = example.add();
console.log(traditionalResult);

const example2 = {
    x: 81,
    add: (x) => x + 1
}
const arrowResult = example2.add(example2.x);
console.log(arrowResult);

let homedirectory = ".";
let base = "public";
let file = "index";
let extension = "html";

//const path = homedirectory + '/' + base + '/' + file + '.' + extension;
const path = `${homedirectory}/${base}/${file}.${extension}`;
console.log(path);