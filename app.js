const boxs = document.querySelectorAll("#box");
const blackArr = ["white", "#eeeeee", "#bdbdbd", "#757575", "#000000"];
const blackArrBorder = ["#000000", "#eeeeee", "#bdbdbd", "#757575", "#000000"];
const navBtn = document.querySelector(".nav__btn");

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
      boxObjs[i].box.style.borderColor = blackArrBorder[boxObjs[i].indexNum];
  });
  if (boxObjs[i].box.innerText === "1"){
    boxObjs[i].box.style.color = blackArr[1];
  } else if (boxObjs[i].box.innerText === "2"){
    boxObjs[i].box.style.color = blackArr[2];
  } else if (boxObjs[i].box.innerText === "3"){
    boxObjs[i].box.style.color = blackArr[3];
  } else if (boxObjs[i].box.innerText === "4"){
    boxObjs[i].box.style.color = blackArr[4];
  }
}

function navBtnClickHandler(){
  const navList = document.getElementById("navList");
  navList.classList.toggle("hidden");
}

navBtn.addEventListener("click", navBtnClickHandler);