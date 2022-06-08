// Code your solutions in this file
function writeCards(arr, event) {
    const newArr = [];
    for (let name in arr) {
        newArr.push(`Thank you, ${arr[name]}, for the wonderful ${event} gift!`);
    }
    return newArr;
}

function countDown(number) {
    for(let count = number; count > -1; count--){
        console.log(count);
    }
}