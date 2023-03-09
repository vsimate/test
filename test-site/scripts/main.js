//1.切换图像程序
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    }else{
      myImage.setAttribute('src', 'images/firefox-icon.png');
    }
}

//2.弹出窗口，输入姓名，显示姓名

let myButton = document.querySelector('button');//获取按钮
let myHeading = document.querySelector('h1');//获取h1


function setUserName() {
  let myName = prompt('请输入你的名字。');//获取姓名
  if(!myName) {//未输入姓名
    setUserName();//重复执行程序
  } else {//输入姓名
    localStorage.setItem('name', myName);//将name数据保存到浏览器
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;//将name数据打印到h1
  }
}

//初始化
if(!localStorage.getItem('name')) {//若不存在，则创建
  setUserName();
} else {//若存在
  let storedName = localStorage.getItem('name');//则获取上次保存的名字
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;//设置名字
}

//为按钮绑定setUserName()函数
myButton.onclick = function() {
  setUserName();
}

