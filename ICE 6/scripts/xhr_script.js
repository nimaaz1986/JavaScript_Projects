console.log("xhr_script.js loaded");

// get the button for xhr
let btnXhr = $("#xhrJoke");
// create a url variable
let xhr_url = "https://icanhazdadjoke.com/";
// create a click callback that handles the API call
$(btnXhr).click(() => {
    // instantiate an XMLHttpRequest object
    let xhr = new XMLHttpRequest();
    // confiture with open()
    xhr.open("GET", xhr_url);
    // set the necessary headers for icanhazdadjoke.com
    xhr.setRequestHeader("Accept", "application/json");
    // create the callback to handle the onreadystatechange
    xhr.onreadystatechange = function() {
        // only execute when done and status is 200
        if (xhr.readyState === 4 && xhr.status === 200) {
            // get the responseText
            let joke = xhr.responseText;
            // console log
            //console.log(joke);
            // JSON.parse the joke
            let parsedJoke = JSON.parse(joke);
            // set the output
            console.log(parsedJoke['joke']);
            $("#output").text(parsedJoke['joke']);

        }
            
    }
        
    // send the request
    xhr.send();





})


