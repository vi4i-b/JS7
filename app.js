let a=["Blue","Red","Green","Yellow"];
function ThreeletterWord(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i].length===3){
            console.log(arr[i]);
        }
    }
}
ThreeletterWord(a);

let b=["Aslan","Leo","Simba"];
function startWithA(arr){
var newArr=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i].startsWith("A")){
            newArr.push(arr[i]);
        }
    }

    console.log(newArr);
}
startWithA(b);



let arrr=['2','3','4','5','6'];
function OddNumbers(arr){
    var count=0;
    var count1=0
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!==0){
            count++;
        }
        else{
            count1++;
        }
    }
    console.log("Odd numbers: " + count);
    console.log("Even numbers: " + count1);
}
OddNumbers(arrr);
