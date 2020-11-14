// var tweets = [
//     "tweet 1",
//     "tweet 2",
//     "tweet 3",
//     "tweet 4",
//     "tweet 5",
//     "tweet 6",
//     "tweet 7",
//     "tweet 8",
//     "tweet 9",
//     "tweet 10",
// ];
// // can i use let vs var?
// for(let i = 0; i < tweets.length; i ++) {
//     console.log(tweets[i]);
// }

// bonus
// from w3schools page on arrays "object"
var tweets = [
    { tweet:"My first tweet is born", 
    username:"birdy", 
    created_at:"11-14-2020", 
    age:100},
    { tweet:"My second tweet", 
    username:"ducky", 
    created_at:"01-01-2020", 
    age:2},
]; 

//
tweets.forEach (function (tweets) {
    console.log(tweets);
}
);
// for(var i = 0; i < tweets.length; i ++) {
// console.log(tweets[i] + username[i] + created_at[i]);
// }