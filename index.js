const num1=document.getElementById('num1');
console.log(num1)
const num2=document.getElementById('num2');
const num3=document.getElementById('num3');

function updateClock(){
  const d=new Date();
const hour=d.getHours();
const minute=d.getMinutes();
const second=d.getSeconds();

num1.innerText=hour;
console.log(num1.innerText);
num2.innerText=minute;
num3.innerText=second;
setTimeout(()=>{
  updateClock();
},1000);
}

updateClock();
