var tweet = [
    { tweet: "My first tweet is born", 
    username: "birdy", 
    created_at: "01-01-2020", 
    age: 10
    },
        { tweet: "My second tweet", 
        username: "ducky", 
        created_at: "01-02-2020",   
        age: 2
    },
    { tweet: "My third tweet", 
        username: "cow", 
        created_at: "01-03-2020", 
        age: 20
    },
    { tweet: "My fourth tweet", 
        username: "cat", 
        created_at: "01-04-2020", 
        age: 18
    },
    { tweet: "My fifth tweet", 
        username: "llama", 
        created_at: "01-05-2020", 
        age: 21
    },
    { tweet: "My sixth tweet", 
        username: "fish", 
        created_at: "01-06-2020", 
        age: 5
    },
    { tweet: "My seventh tweet", 
        username: "horse", 
        created_at: "01-07-2020", 
        age: 41
    },
    { tweet: "My eight tweet", 
        username: "elephant", 
        created_at: "01-08-2020", 
        age: 17
    },
    { tweet: "My nineth tweet", 
        username: "hamster", 
        created_at: "01-09-2020", 
        age: 19
    },
    { tweet: "My tenth tweet", 
        username: "worm", 
        created_at: "01-10-2020", 
        age: 1
    },
]; 
function myTweet(tweet) {
    return tweet.age >= 18;
}
var filterTweetByAge = tweet.filter(myTweet);
console.log(filterTweetByAge);
