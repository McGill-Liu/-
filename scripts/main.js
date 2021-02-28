// let myHeading = document.querySelector('h1');
// querySelector根绝选择器找到其HTMLElement对象
// myHeading.textContent = 'Hello world!';
// textContent 和 InnerHTML 的区别，现在还不太不懂--------------------------------

function multiply(num1, num2){
    let resule = num1 * num2;
    return resule;
}

var a = multiply(3,5);
var b = multiply(10,5);

document.querySelector("html").onclick = function(){
    // alert("别点我了，我怕疼！");
}

let myImage = document.querySelector("img");
myImage.onclick = function(){
    let imgSrc = myImage.getAttribute("src");
    if(imgSrc === "images/firefox-icon.jpeg"){
        myImage.setAttribute("src","images/firefox2.jpeg");
    }else{
        myImage.setAttribute("src","images/firefox-icon.jpeg");
    }
}

let myButton = document.querySelector("button");
let myH1  = document.querySelector("h1");

function setUserName(){
    let myName = prompt("请输入您的名字：");
    if(!myName || myName === null){
        setUserName();
    }else{
        localStorage.setItem("name",myName);
        myH1.textContent = "Mozilla 酷毙了，" + myName;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    let tempName = localStorage.getItem("name");
    myH1.textContent = "Mozilla 酷毙了，" + tempName;
}

myButton.onclick = function(){
    setUserName();
}