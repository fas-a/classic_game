let board = [0,0,0,0,0,0,0,0,0]
let turn = true
let modal = document.getElementById("modal")
let close = document.getElementsByClassName("close")[0]
let winner = " "
function add(x) {
    if (board[x] == 0){
        if (turn){
            board[x] = 1
        } else {
            board[x] = -1
        }
        write(x,board[x])
        turn = !turn
        let win = check()
        console.log({win})
        if (win != 0) {
            if(win == 1){
                winner = "X"
            } else if(win == -1){
                winner = "O"
            }
            document.getElementById("win-text").innerHTML = winner + " win"
            modal.style.display = "block"
            board = [0,0,0,0,0,0,0,0,0]
            turn = true
        }
    }
}
function check() {
    for (let i = 0; i < 3; i++) {
        if(board[i] == board[i+3] && board[i+3] == board[i+6] && board[i] != 0){
            return board[i]
        }
    }
    for (let i = 0; i < 9; i+=3) {
        if(board[i] != 0 && board[i] == board[i+1] && board[i+1] == board[i+2]){
            return board[i]
        }
    }
    if(board[0] == board[4] && board[4] == board[8] && board[0] != 0){
        return board[0]
    }
    if(board[2] == board[4] && board[4] == board[6] && board[2] != 0){
        return board[2]
    }
    return 0
}
function write(id, val) {
    if(val == 1){
        document.getElementById(id).innerHTML = "X"
    } else {
        document.getElementById(id).innerHTML = "O"
    }
}
close.onclick = function(){
    modal.style.display = "none"
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML = ""
    }
}