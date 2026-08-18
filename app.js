let a = prompt("4 reqemli eded daxil et");

if (a && a.length === 4 && !isNaN(a)) {
    let b = Number(a[0]) + Number(a[1]) + Number(a[2]) + Number(a[3]);
    console.log("Rəqəmlərin cəmi:", b);
} else {
    alert("Sehifeni yenileyin ve 4 reqemli eded daxil edin");
}
