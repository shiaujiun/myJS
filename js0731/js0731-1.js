// 擇一使用-取得送出取得資料
// let myBtn=document.getElementById('btn1');
let myBtn=document.querySelector('#btn');

// 監聽按鈕是否被左鍵按了一下
myBtn.addEventListener('click',function(){
let result = "";
// 取得科目的全部
let subject = document.getElementsByName('subject');
// 使用回圈逐一檢查是否被選取=>checked
for (let i=0;i<subject.length;i++){
  if(subject[i].checked){
    result=subject[i].value;
    // 因為是單選所以找到後就結束回圈
    break;
  }
}
console.log('科目:'+result);
});