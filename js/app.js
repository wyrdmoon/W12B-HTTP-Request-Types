function sendTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;


    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };

    let ajax = new XMLHttpRequest();


    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            document.getElementById("login-status").innerHTML = "LOGIN SUCCESS";
            console.log(JSON.parse(this.responseText));
            document.getElementById("Tweet");
        } else if (this.readyState != 4) {
            console.log("LOADING");
        } else {
            console.log("Error!");
        }

    };
  
    ajax.open("POST", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}
function patchTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;


    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };





    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
            document.getElementById("Tweet")
        } else if (this.readyState != 4) {
            console.log("LOADING");
        } else {
            console.log("Error!");
        }
    }


    ajax.open("PATCH", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send();
}





function deleteTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;


    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
            document.getElementById("Tweet")
        } else if (this.readyState != 4) {
            console.log("LOADING");
        } else {
            console.log("Error!");
        }

    }

    ajax.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));



}








function getTweet() {
    let tweetTitle = document.getElementById("title-input").value;
    let tweetBody = document.getElementById("body-input").value;


    let tweetData = {
        title: tweetTitle,
        body: tweetBody,
        userId: 1
    };

    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 201) {
            console.log(JSON.parse(this.responseText));
            document.getElementById("Tweet")
        } else if (this.readyState != 4) {
            console.log("LOADING");
        } else {
            console.log("Error!");
        }

    }
    ajax.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
    ajax.setRequestHeader("Content-Type", "application/json");
    ajax.send(JSON.stringify(tweetData));
 
    document.getElementById("body-input").addEventListener("click",getTweet)

};




document.getElementById("tweet-submit").addEventListener("click", sendTweet)