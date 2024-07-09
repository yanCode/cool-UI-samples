const shareButton = document.querySelector(".share-btn")
const dialog = document.querySelector('dialog')
const closeButton = document.querySelector('.close-btn')
const copyButton = document.getElementById("copy-text")
const urlInput = document.getElementById('copy-link-input')
shareButton.addEventListener("click", () => {
    dialog.showModal();
})
closeButton.addEventListener("click", () => {
    dialog.close();
})
copyButton.addEventListener("click", () => {
    urlInput.select();
    urlInput.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(urlInput.value);
    document.getElementById("copy-text").innerText = "Copied!"
})

