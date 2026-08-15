//1.istifeciden alinan stringin uzunlugunu tapin.
//2.istifeciden alinan stringinde "e" herfi olub olmadigini yoxlayin.
//3.istifeciden alinan stringin "code" sozu ile basladigini yoxlayin.
//4.istifeciden alinan stringin "code" sozu ile bitdiyini yoxlayin.
//5.istifeciden alinan stringde butun t herflerinin yerine "####" qoyun.

let userInput = prompt("Enter a string:");
console.log (userInput.includes("e"));
console.log (userInput.startsWitsh("code"));
console.log (userInput.endsWith("code"));
console.log (userInput.replaceAll("t", "####"));


