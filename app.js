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
