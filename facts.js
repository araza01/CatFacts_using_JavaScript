const xhr = new XMLHttpRequest();
xhr.open("GET", "https://cat-fact.herokuapp.com/facts/random", true);
xhr.onload = function() {
    if(this.status == 200 && this.readyState == 4) {
        document.getElementById("cat-fact").innerHTML = JSON.parse(this.responseText).text;
    }
};
xhr.send();

function catFact() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://cat-fact.herokuapp.com/facts/random", true);
        xhr.onreadystatechange = function() {
        if(this.status == 200 && this.readyState == 4) {
            document.getElementById("cat-fact").innerHTML = JSON.parse(this.responseText).text;
        }
    };
    xhr.send();
}