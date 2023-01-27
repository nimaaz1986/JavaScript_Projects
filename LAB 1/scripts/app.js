/**
 * 
 * 
 */

function timedRedirect(e){
    e.preventDefault();
    e.stopPropagation();
    let contactEmail = document.getElementById('exampleInputEmail1').value;
    let contactpassword = document.getElementById('exampleInputPassword1').value;

    console.log("Email " + contactEmail + " Password: "+ contactpassword);

    setTimeout(function (){
        window.location.href = "index.html";
    }, 3000);
}


let submitButton = document.getElementById('submit-button');
if (submitButton){
    submitButton.addEventListener('click', timedRedirect, false);
}