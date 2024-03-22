let userscore=0;
let computerscore=0;
const choice=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const computerscorepara=document.querySelector("#computer-score");
const gencomputerchoice=()=>{
    const options=["rock","papper","scissors"];
    const randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}
const drawgame=()=>{   
    msg.innerText="Draw. play again"
    msg.style.backgroundColor = "#FFFC9B";
}
let showwinner=(userwin,userchoise,computerchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win! your ${userchoise} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";

    }else{
        computerscore++;
        computerscorepara.innerText=computerscore;
        msg.innerText=`you lose! ${computerchoice} beats your ${userchoise}`;
        msg.style.backgroundColor = "red";
    }
}
//user choice
const playgame=(userchoise)=>{
console.log("user choice=",userchoise);
//generate computer choice ->modular
const computerchoice=gencomputerchoice();
console.log("computer choice=",computerchoice);
if(userchoise===computerchoice){
    //Draw
    drawgame();
}else{
    let userwin=true;
    //scissor,papper
    if(userchoise==="rock"){
      userwin=computerchoice==="papper" ? false:true;
    }else if(userchoise==="papper"){
        //rock,scissor
        userwin=computerchoice==="scissors"? false:true;
    }else{
        //rock,papper
        userwin=computerchoice==="rock"? false:true;
    }
    showwinner(userwin,userchoise,computerchoice);
}

}

choice.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoise=choice.getAttribute("id");
        console.log("choice was clicked",userchoise);
        playgame(userchoise);

    })
})