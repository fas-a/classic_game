let befnum = 0
let picknum = 0
function getnum(num) {
    picknum = num
    console.log({num})
    if(befnum != num){
        document.getElementById(num).classList.add("box-selected")
        document.getElementById(befnum).classList.remove("box-selected")
    }
    befnum = num
    console.log({befnum})
}

function placenum(id) {
    if(picknum != 0){
        document.getElementById(id).innerHTML = picknum
    }
}