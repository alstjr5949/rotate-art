#고민
<br>

1. 왜 querySelectorAll로 호출한 변수는 addEventListener 함수를 사용했을 때 Error가 발생하는가?

- 구글링 결과 document.querySelectorAll은 NodeCollection을 가져오기 때문이라고 한다. NodeCollection은 숫자 인덱스를 가지고 있고 length property를 가지고 있지만, 배열은 아니기 때문에 forEach등의 Iterator Fuction을 호출할 수 없다.
  <br>
  <strong>해결책</strong> : for 함수를 사용해서 해결해본다.
