
const xhr = new XMLHttpRequest();
let xhrURL = "https://cat-fact.herokuapp.com/facts/random?amount=5";
xhr.open("GET", xhrURL, true);
xhr.onload = function() {
    let data = JSON.parse(this.responseText);
    if(this.status == 200 && this.readyState == 4) {
        catFact(data);
    }
};
xhr.send();

function catFact(arr) {
    let fact = "";
    for(let i = 0; i < 5; i++) {
        fact += "<ul>" + "<li>" + arr[i].text + "<br>" + "</li>" + "</ul>";
    }
    document.getElementById("cat-fact").innerHTML = fact;
}

$(document).ready(function() {
    $(document).ajaxStart(function() {
        $(".loader").show();
        $("#cat-fact").hide();
    });
    $(document).ajaxComplete(function() {
        $(".loader").hide();
        $("#cat-fact").show();
    });

    $(".btn").click(function() {
        $.getJSON({
            url: "https://cat-fact.herokuapp.com/facts/random?amount=5",
            success: (data) => {
                catFact(data);
            } 
        });
    });
});
