// file uplode js
const input = document.querySelector("#image_uploads");
const preview = document.querySelector(".preview");

let logo;

input.style.opacity = 0;

input.addEventListener("change", updateImageDisplay);

document
  .getElementById("append-img")
  .addEventListener("click", updateImageDisplay);

function updateImageDisplay() {
  while (preview.firstChild) {
    preview.removeChild(preview.firstChild);
  }

  const curFiles = input.files;
  console.log(curFiles);
  if (curFiles.length === 0) {
    const para = document.createElement("p");
    para.textContent = "No files currently selected for upload";
    preview.appendChild(para);
  } else {
    // const list = document.createElement('ol');
    // preview.appendChild(list);
    document.getElementById("append-img").innerHTML = "";

    for (const file of curFiles) {
      // const listItem = document.createElement('li');
      const para = document.createElement("p");
      console.log(validFileTypeV(file));
      if (validFileType(file)) {

        var formData = new FormData(document.getElementById('logoform1'));
        $.ajax({
          type: "POST",
          url: "https://pixigo.in/user/upload",
          data: {
            image: formData.get('image'),
            token: localStorage.getItem(`token`),
          },
          processData: false,
          contentType: false,
          success: function (data) {
            console.log(data);
          },
        });


        const image = document.createElement("img");
        image.src = URL.createObjectURL(file);
        $("#append-img").append(image);
        var width = image.clientWidth;
        var height = image.clientHeight;
        console.log(height, width);
        logo = image;

        $(".savebtnlogo").css("display", "flex");

        // listItem.appendChild(image);
        // listItem.appendChild(para);
      } else if (validFileTypeV(file)) {
        const video = document.createElement("video");
        video.src = URL.createObjectURL(file);
        $("#append-img").append(video);

        // listItem.appendChild(video);
      } else {
        para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
        listItem.appendChild(para);
      }

      // list.appendChild(listItem);
    }
  }
}

const fileTypes = [
  "image/apng",
  "image/bmp",
  "image/gif",
  "image/jpeg",
  "image/pjpeg",
  "image/png",
  "image/svg+xml",
  "image/tiff",
  "image/webp",
  "image/x-icon",
];



const filetypeV = ["video/mp4"];
function validFileTypeV(file) {
  return filetypeV.includes(file.type);
}

function validFileType(file) {
  return fileTypes.includes(file.type);
}

function returnFileSize(number) {
  if (number < 1024) {
    return number + "bytes";
  } else if (number >= 1024 && number < 1048576) {
    return (number / 1024).toFixed(1) + "KB";
  } else if (number >= 1048576) {
    return (number / 1048576).toFixed(1) + "MB";
  }
}


