const grid = document.querySelector(".container");

const board = [
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0,
];

let currentPlayer = 1;
// board.forEach(row => {
//     for(let r = 0; r < 6; r++){
//         for(let c = 0; c < 7; c++)
//     }
// })
for(let i = 0; i < 42; i++){
    let tile = document.createElement("div");
    tile.className = "tile";
    tile.id = "tile";
    grid.appendChild(tile);

    tile.onmouseenter =  () => {
        onMouseEnteredColumn(i % 7);
    }
    tile.onclick = () =>{
        onColumnClick(i % 7);
    }
}


function onColumnClick(column){
    let availabeRows = board.filter((_, index) => index % 7 === column).lastIndexOf(0);
    if(availabeRows === -1){
        return;
    }
    board[(availabeRows * 7) + column] = currentPlayer;
    let token = grid.children[(availabeRows * 7) + column];

    let tile = document.createElement("div");
    tile.className = "tile"
    tile.dataset.taken = true;
    token.appendChild(tile)
}


function onMouseEnteredColumn(column){
    let unUsedToken = document.querySelector("[data-taken='false']");
    if(unUsedToken){
        unUsedToken.parentElement.removeChild(unUsedToken);
    }
    let tile = grid.children[column];
    let token = document.createElement("div");
    token.className = "token";
    token.dataset.taken = false;
    tile.appendChild(token);
}


// let color = ();
// color[-1] = "blue";
// color[1] = "red";
// let count = 0

// $("#grid").each(function(){
//     $(this).attribute("id", count);
//     $(this).click(function(){
//         if(isValid($(this.attribute("id"))){
//             $(this).css("backGroundColor", color[currentPlayer]});
            
//     })
// })



// for(let i = 0; i < cells.length; i++){
//     cells[i].onclick = () => {
//         if(currentPlayer == 1){
//             cells[i].classList.add("occupied");
//             cells[i].classList.add("playerOne")
//             currentPlayer = 2
//             display.innerHTML = currentPlayer
//         }
//     }
// }


// const firstPlayer = "red";
// const secondPlayer = "yellow";
// const currentPlayer = firstPlayer;
// const gameOn = false;
// const columns = 7;
// const rows = 6;

// let box1 = document.querySelector('.one')
// console.log(box1)
// let img = document.createElement('img')
// img.src = "./images/green_circle.png"
// img.style.height = '90%'
// img.style.width = '90%'
// box1.appendChild(img)