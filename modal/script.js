const shareButton = document.querySelector(".share-btn")
const dialog = document.querySelector('dialog')
const closeButton = document.querySelector('.close-btn')
shareButton.addEventListener("click", () => {
    dialog.showModal();
})
closeButton.addEventListener("click", () => {
    dialog.close();
})
