function submit() {
    const list = document.getElementsByTagName("ol")[0];
    const text = document.getElementsByTagName("input")[0].value;
    const element = document.createElement("li");
    element.innerHTML = text;
    list.appendChild(element)
}

function deleteLast() {
    const list = document.getElementsByTagName("ol")[0];
    if (list.children.length > 0) {
        list.removeChild(list.children[list.children.length - 1]);
    }
}

async  function getDog() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const json = await response.json();
    const img = document.getElementsByTagName("img")[0];
    img.src = json.message;
}