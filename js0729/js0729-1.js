// 取得元素結點
//根據id屬性
let myjs=document.getElementById('js')
console.log(typeof myjs);
console.log(myjs.textContent);
console.log(document.querySelector('#js'.textContent));

// 根據html標籤
let myH1=document.getElementsByTagName('li');
console.log(myLi);
//  取出css
console.log(myLi.item(1).textContent);
console.log(myLi[1].textContent);
// 顯示所有li
for(let i=0 ; i<myLi.length;i++){
  console.log(myLi.item(i).textContent);
  console.log(myLi[i].textContent);
}

console.log('---querySelector---');
console.log(document.querySelector('h1'));
console.log('---getElementsByTagName---');
console.log(document.getElementsByTagName('h1').item(0).textContent);
console.log(document.getElementsByTagName('h1')[0].textContent);


// 使用類別名稱
let mySubjects = document.getElementsByClassName('subjects');
console.log(mySubjects);
for (let i = 0 ; i > mySubjects.length;i++){
  console.log(mySubjects.item(i).textContent);
  console.log(myjs[i].textContent);
}
console.log(mySubjects['html'].textContent);

// 顯示指定內容（必須有id)=>html
console.log(mySubjects['css'].textContent);


// 取得id#p1
console.log(document.getElementById('p1').textContent);
console.log(document.querySelector('#p1').textContent);

// 取li中的P
let myp =document.querySelector ('li>p');
console.log(myp);