let a=["Blue","Red","Green","Yellow"];
function ThreeletterWord(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i].length===3){
            console.log(arr[i]);
        }
    }
}
ThreeletterWord(a);