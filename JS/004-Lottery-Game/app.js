let result=document.querySelector(".result");
let button=document.querySelector(".button");
let input=document.querySelector("#input");
 



button.addEventListener("click",()=>{ 
    var count=0;
 result.innerHTML = ""
while(count<input.value){
var numArray=[];
while(numArray.length<6){
    var number=Math.floor(Math.random() * 90) + 1;
    if(numArray.includes(number) != true){
        numArray.push(number)
    }
}

numArray.sort(function(a,b){return a-b})

while(numArray.length<7){
    var sub=Math.floor(Math.random() * 90) + 1;
    if(numArray.includes(sub) != true){
        numArray.push(" | "+ sub + " | ")}
}
var joker=Math.floor(Math.random() * 90) + 1
numArray.push(joker)


count++;
let ul = document.querySelector("ul");
ul.style.listStyle="none"
ul.style.margin="1rem"
let li = document.createElement("li");
li.style.margin="1rem";
li.innerText =`${numArray}`
ul.appendChild(li);
}
});