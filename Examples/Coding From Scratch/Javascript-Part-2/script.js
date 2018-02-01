var colors = ["yellow", "blue", "red"];

console.log(colors.length);
console.log(colors);
console.log(colors[0]);
colors.sort();
console.log(colors);
console.log(colors[0]);

var newLength = colors.push("purple");
colors.sort();
console.log(colors);
console.log(newLength);

var popedColor = colors.pop();
console.log(colors);
console.log(popedColor);

var i = 0;
while(i < colors.length){
    console.log(colors[i]);
    i++;
}

var y = 0;
do {
    console.log(colors[y]);
    y++;
} while(y < colors.length)

for(var j = 0; j < colors.length; ++j){
    var currentColor = colors[j];
    console.log(currentColor);
}

for (var currentColor of colors){
    console.log(currentColor);
}

for (var x in colors){
    console.log(colors[x]);
}

colors.forEach(c => console.log(c));