let a=100;
while (a<1000) {
    console.log(a);
    a+=10;
}

let b=10, c=1;
while (b<100) {
    if (b % 2 != 0) {
        c *= b;
    }
    b++;
}
console.log(c);

let t="My name";
function capitalize(str) {
    let words = str.split(" ");
    for (let i=0; i<words.length; i++) {
        words[i]=words[i][0].toUpperCase() + words[i].substr(1);
    }
    return words.join(" ");
}
console.log(capitalize(t));
