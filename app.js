let a = prompt("datani daxil edin bu formatda il.ay.gun");

let c = +a.split(".")[0];
let b = +a.split(".")[1];
let d = +a.split(".")[2];

let f = "";

switch (b) {
    case 1:
        f = "Yanvar";
        break;
    case 2:
        f = "Fevral";
        break;
    case 3:
        f = "Mart";
        break;
    case 4:
        f = "Aprel";
        break;
    case 5:
        f = "May";
        break;
    case 6:
        f = "Iyun";
        break;
    case 7:
        f = "Iyul";
        break;
    case 8:
        f = "Avqust";
        break;
    case 9:
        f = "Sentyabr";
        break;
    case 10:
        f = "Oktyabr";
        break;
    case 11:
        f = "Noyabr";
        break;
    case 12:
        f = "Dekabr";
        break;
    default:
        console.log("Səhv ay daxil edilib");
}

if (f !== "") {
    console.log(d + " " + f + " " + c + " il");
}