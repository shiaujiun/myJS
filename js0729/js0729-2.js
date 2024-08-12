// 使用name屬性取得元素內容
let mydrinks = document.getElementsByName('drink');
console.log(mydrinks);

for(let i = 0 ; i < mydrinks.length;i++){
  console.log(mydrinks.item(i).value)
console.log(mydrinks[i].value);
}
// 取得勾選項目內容
1.找到內容
let mybtn=document.querySelector('#btn');
2.監聽按鈕是否被按click=>左鍵