const updateDropzoneFileList = (dropZoneElement, file) => {
  let dropzoneFileMessage = dropZoneElement.querySelector('.file-info');
  dropzoneFileMessage.innerHTML = `
  ${file.name} of ${file.size} bytes`;
}

const dropzoneBox = document.getElementsByClassName("dropzone-box")[0];

const inputFile = document.getElementById("upload-file");
const dropZoneElement = inputFile.closest(".dropzone-area");

inputFile.addEventListener("change", e => {
  if (inputFile.files.length) {
    updateDropzoneFileList(dropZoneElement, inputFile.files[0])
  }
})
dropZoneElement.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZoneElement.classList.add("dropzone--over");
});
["dragleave", "dragend"].forEach((type) => {
  dropZoneElement.addEventListener(type, (e) => {
    dropZoneElement.classList.remove("dropzone--over");
  });
});
dropZoneElement.addEventListener("drop", e => {
  e.preventDefault();
  if (e.dataTransfer.files.length) {
    updateDropzoneFileList(dropZoneElement, e.dataTransfer.files[0]);
  }
  dropZoneElement.classList.remove("dropzone--over");
})
dropzoneBox.addEventListener("reset", (e) => {
  let dropzoneFileMessage = dropZoneElement.querySelector(".file-info");

  dropzoneFileMessage.innerHTML = `No Files Selected`;
});

dropzoneBox.addEventListener("submit", (e) => {
  e.preventDefault();
  const myFiled = document.getElementById("upload-file");
  console.log(myFiled.files[0]);
});