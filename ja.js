const chooseFile = document.getElementById("choose-file");
const imgshow=document.getElementById("im");
chooseFile.addEventListener("change", function () {
    getImgData();
  });
function dani(){
    document.getElementsByClassName("img").src = "pexels-photo-1632790.jpeg";
}