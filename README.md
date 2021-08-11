#고민
<br>

1. 왜 querySelectorAll로 호출한 변수는 addEventListener 함수를 사용했을 때 Error가 발생하는가?

- 구글링 결과 document.querySelectorAll은 NodeCollection을 가져오기 때문이라고 한다. NodeCollection은 숫자 인덱스를 가지고 있고 length property를 가지고 있지만, 배열은 아니기 때문에 forEach등의 Iterator Fuction을 호출할 수 없다.
  <br>
  <strong>해결책</strong> : for 함수를 사용해서 해결해본다.
  <br>

2. 클릭 하면 할 수록 어두워지게 만들 수 없을까? 어느 정도 어두워진다면 다시 초기의 흰색으로 돌아오게 할 수 없을까?

- for문을 통해 작성해보려 해봤지만 쉽게 풀어지지 않았다 for 중첩문을 통해 해결해 보려했다.

  ```
  const boxs = document.querySelectorAll(".box);
  const blackArr = ["#eeeeee", "#bdbdbd", "#757575", "#000000"];

  for(let i = 0; i < boxs.length; i++){
    for(let j = 0; j < blackArr.length; i++){
      boxs[i].addEventListener("click", function(){
        boxs[i].style.backgroundColor = blackArr[j];
      })
    }
  }
  ```

위와 같은 코드로 작성해보았으나 error가 계속 발생했다. 그래서 j를 전역변수로 생성하고 if 문으로 j값을 클릭할 때마다 증가되게끔 만들어 보았다. 처음에는 j를 0으로 설정하고 1씩 증가하는 조건문을 사용했더니 클릭을 했을 때 blackArr[2] 부터 background로 나왔다. 그래서 j를 -1로 설정 후 진행했다.

3. if문을 통해서 클릭으로 색이 점점 진해지는 것은 구현했으나, boxs의 backgroundColor가 전체 박스에 공통으로 적용되는 문제가 발생했다. 그래서 각각의 box에 적용하는 방안을 생각해보았다.

- 약간의 노가다성이 있지만 onclick을 통해 각각의 box에 적용한다는 아주 원초적인 방법이 있겠지만 너무나도 방대한 코드가 될 것이고 이는 좋지 않은 코드라 여러 방법을 시도해 봤으나,, 지금의 지식과 경험으론 한계가 있어 Nomad Coder Slack 채널에 질문해보았다. 질문 결과 box의 eventHandeler 함수가 j를 공유하는 문제점이 있다는 얘기를 들었고 j를 사용하는 대신 box와 index값을 가지는 object들의 array를 하나 새로 생성해서 처리해보는 것이 좋겠다는 의견을 받았다.
