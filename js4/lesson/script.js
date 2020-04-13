document.getElementById("btn").onclick = setText;
document.getElementById("hideBtn").onclick = hideList;
document.getElementById("selfhideBtn").onclick = function () {
    this.style.display = "none"
};

function setText() {
    let text = document.getElementById("input").value;
    let elements = document.getElementsByTagName("li");
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = text;
    }

    document.getElementById("count").innerText = text.length
}

function hideList() {
    document.getElementById("text").style.display = "none";
}