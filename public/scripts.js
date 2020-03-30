function copyLink() {
    var copyText = document.getElementById("link");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
    document.getElementById('msg').innerText = 'Link copied!';
}