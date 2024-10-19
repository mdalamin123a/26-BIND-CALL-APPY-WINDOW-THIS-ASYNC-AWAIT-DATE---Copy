/**
 * setTimeOut(callback, milisec); it is used to make a work after specific time
 * 
 * setInterval(callback, milisec); it is used to do a task continuely  after specific time
 */
function doSomething(){
    console.log(3333);
}
console.log(2222);
// setTimeout(doSomething, 4000);

// setTimeout(() => {
//     console.log('lazy and waiting');
// }, 0);

setInterval(function(){
    console.log('doing it again');
}, 3000);

console.log(4444);
console.log(5555);
console.log(6666);
console.log(7777);