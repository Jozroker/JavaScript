document.getElementById("btn").onclick = setText;

function setText() {
    let text = document.getElementById("input").value;
    let elements = document.getElementsByTagName("li");
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerText = text;
    }

    document.getElementById("count").innerText = text.length
}