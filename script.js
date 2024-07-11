let newBtn       = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container");
let boxes        = document.querySelectorAll(".box");
let resetBtn     = document.querySelector("#reset-button");
let msg          = document.querySelector("#msg");
let turn0       = true;
let count       = 0;



const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{ 
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            box.style.color =" red";
            count = count+1;
            console.log(count);
           
        }
        else{
            box.innerText = "X";
            turn0 = true;
            box.style.color =" blue";
            count = count+1;
            console.log(count);
        }
        
        box.disabled = true;

        checkWinner();
    });
});


const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = " ";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulaton , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    
};

const  checkWinner = () =>{
    for(let pattern of winPatterns){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""  ){
            if(position1 === position2 && position2 === position3){
                console.log("Winner", position1);
                showWinner(position1);
            }
        }
        if(count == 9){
            msg.innerText = `No one wins the game`;
            msgContainer.classList.remove("hide");
        }

    }
};


newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

