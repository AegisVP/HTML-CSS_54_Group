function readMore() {
    var more = document.getElementById("more");
    var btn = document.getElementById("btn");

    if (more.style.display === "block") {
        btn.innerHTML = "Read more";
        more.style.display = "none";
    }
    else {
        btn.innerHTML = "Less";
        more.style.display = "block";
    }
}