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
