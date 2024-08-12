// 建立存放選結果的變數
let result = "";
// 取得按鈕
let myBtn = document.querySelector('#btn');
// 監聽是否左鍵一下
myBtn.addEventListener('click', function () {
  // 取得下拉式方塊
  let myCity = document.querySelector('#city');
  // 逐一檢查是否被選取=>selected
  for (let i = 0; i < myCity.length; i++) {
    if (myCity[i].selected) {
      if (myCity[i].value == "") {
        result = '未選取縣市'
      } else {
        result = myCity[i].value;
      }
    }
    break;
  }
  console.log('縣市' + result);
})