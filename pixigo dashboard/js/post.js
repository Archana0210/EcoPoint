$('.addpostdiv').click(function(){
    $('.listpost').css('display','none')
    $('.addandeditproduct').css('display','block')

})
$('.backbtn').click(function(){
  $('.listpost').css('display','none')
})


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
        // para.textContent = `File name ${file.name}, file size ${returnFileSize(file.size)}.`;
        const image = document.createElement("img");
        const image_m = document.createElement("img");
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









// Get the modal
var modaladdcollecion = document.getElementById("myModaladdcollecion");

// Get the button that opens the modal
var btnaddcollecion = document.getElementById("myBtnaddcollecion");

// Get the <span> element that closes the modal
var spanaddcollecion = document.getElementsByClassName("closeaddcollecion")[0];

// When the user clicks on the button, open the modal
btnaddcollecion.onclick = function() {
  modaladdcollecion.style.display = "flex";
}
 
// When the user clicks on <span> (x), close the modal
spanaddcollecion.onclick = function() {
  modaladdcollecion.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modaladdcollecion) {
    modaladdcollecion.style.display = "none";
  }
  if (event.target == modal) {
    $(".modal-content").css("animation", "hidemew 0.5s forwards");
    const myTimeout = setTimeout(myGreeting, 450);
  
    function myGreeting() {
    modal.style.display = "none";;
    }
   
  }
}