// function say (something) {
//   console.log(something);
// }

// // say = "Hello";

// function exec (func, arg) {
// func(arg);
// }

//  exec(say,"Hi, there");


// function exec (func, arg) {
// func(arg);
// }
// exec(function say(something){
//   console.log(something);
// }, "Hi, there");

window,setTimeout(
  (something)=> {
    console.log(something);
  },1000, "hello"
)
for (let i = 0 ; i < 50000; i ++){
  console.log(i);
}
window,setTimeout(
  (something)=> {
    console.log(something);
  },4000, " here1"
)
window,setTimeout(
  (something)=> {
    console.log(something);
  },3000, "here2"
)
