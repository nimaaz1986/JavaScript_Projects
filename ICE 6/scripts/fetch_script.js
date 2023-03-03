console.log("fetch_script.js loaded");

// get the button for fetch
let btnFetch = $("#fetchJoke");
// create a url variable
let fetch_url = "https://icanhazdadjoke.com/";
//need a header Accept value set to 'application/json'
let myFetchHeaders = {

    "Accept": "application/json"
  }

// create the callback for the click
$(btnFetch).click(() => {
    // use fetch
    fetch(fetch_url, {
        
        // give the necessary header data
        headers: myFetchHeaders
    })
        // first then() to recieve the promise
        .then((res) => {
            // send the json from the promise on to the next then()
            return res.json();

        }).then((json) => {
            // console log the json
            console.log(json['joke']);
            // set the output
            $("#output").text(json['joke']);
        })

})
    

