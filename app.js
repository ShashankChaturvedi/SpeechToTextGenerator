const text=document.querySelector(".texts");
const button=document.querySelector(".button");
window.SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new window.SpeechRecognition();
recognition.interimResults=true;
// recognition.continuous=true;
let p=document.querySelector("p");
recognition.addEventListener("result",(e)=>{
    const t=Array.from(e.results)
    .map(result=>result[0])
    .map(result=>result.transcript)
    .join("");
    p.innerText=t;
    text.appendChild(p)
    if(e.results[0].isFinal){
        p =document.createElement("p")
    }
})
recognition.addEventListener("end",()=>{
    recognition.start();
})
// button.addEventListener("click",()=>{
//     recognition.start();
    
// })
