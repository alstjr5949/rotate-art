const boxs = document.querySelectorAll(".box");
const blackArr = ["#eeeeee", "#bdbdbd", "#757575", "#000000"];

for(let i =0; i < boxs.length; i++){
  boxs[i].addEventListener("click", function(){
    boxs[i].style.backgroundColor = "black";
  })
}