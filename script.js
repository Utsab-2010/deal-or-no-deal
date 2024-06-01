const og = [
    0.01,1,5,10,25,50,100,200,300,400,500,
    1000,2500,5000,7500,10000,25000,50000,75000,100000,250000,500000
];
let amounts = [
    0.01,1,5,10,25,50,100,200,300,400,500,
    1000,2500,5000,7500,10000,25000,50000,75000,100000,250000,500000
];
let used = [];
let banker = [];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

shuffle(amounts);
console.log(amounts);


function update(){
    var str ="Available Amounts: ";
    let sum = 0;
    
    for(let i=0; i<og.length; i++){
        let flag=0;
        for(let j=0;j<used.length;j++){

            if(og[i]==used[j]){
                flag++;
            }
        }
            
        if (flag==0){
            str = str + og[i].toString() + ", ";
            sum+= og[i];
        }
        console.log(str);
    }
    let avg = Math.floor(sum/(og.length - used.length));
    document.getElementById("b-score").innerHTML = "Banker's Score: $" + avg.toString();
    document.getElementById("avai").innerHTML = str;
}

function reveal(element){
    element.innerHTML = "$" + amounts[Number(element.id)-1].toString();
    element.style.backgroundImage = "linear-gradient(45deg,hwb(194 16% 69%),rgb(69, 130, 142),rgb(40, 64, 80))";
    used.push(amounts[Number(element.id)-1]);
    // console.log(used);
    update();
}

// let boxes = document.getElementsByClassName("box");

// for (let i = 0; i < boxes.length; i++) {
//     boxes[i].onclick= function(){reveal}
//   }