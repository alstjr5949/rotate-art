const boxs = document.querySelectorAll("#box");
const blackArr = ["white", "#eeeeee", "#bdbdbd", "#757575", "#000000"];

const boxObjs = [];

for(let i = 0; i < boxs.length; i++){
  const boxObj = {
    box : boxs[i],
    indexNum: 0
  };
  boxObjs.push(boxObj);
}

//기존 if문 간소화, j값을 indexNum으로 대체
for (let i = 0; i < boxObjs.length; i++){
  boxObjs[i].box.addEventListener("click",function(){
    boxObjs[i].indexNum = boxObjs[i].indexNum + 1;
      if(boxObjs[i].indexNum === 5){
        boxObjs[i].indexNum = 0;
      }
      boxObjs[i].box.style.backgroundColor = blackArr[boxObjs[i].indexNum];
  });
}