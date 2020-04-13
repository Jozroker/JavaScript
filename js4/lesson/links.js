document.getElementById("btn").onclick = internalLinks;

function internalLinks() {
    let lists = document.getElementsByTagName('a');
    for (let listsKey in lists) {
        if (lists[listsKey].hasAttribute("href")) {
            if (lists[listsKey].getAttribute("href").match(/^https?:\/\//i) ||
                lists[listsKey].getAttribute("href").match(/^ftp?:\/\//i)) {
                lists[listsKey].classList.add("external-red")
            }
        }
    }
}