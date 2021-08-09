const boxs = document.querySelectorAll(".box");
const blackArr = ["#eeeeee", "#bdbdbd", "#757575", "#000000"];
let j = -1;

for(let i =0; i < boxs.length; i++){
  boxs[i].addEventListener("click", function(){
    if(j ===  -1){
      j = j + 1;
    } else if(j === 0){
      j = j + 1;
    } else if(j === 1){
      j = j + 1;
    } else if(j === 2){
      j = j + 1;
    } else if(j === 3){
      j = 0;
    }; 
      boxs[i].style.backgroundColor = blackArr[j];
  })
}