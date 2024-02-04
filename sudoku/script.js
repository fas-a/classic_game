let befnum = 0
let picknum = 0
function getnum(num) {
    picknum = num
    console.log({num})
    if(befnum != num){
        document.getElementById(num).style.backgroundColor = "#aaa"
        document.getElementById(befnum).style.backgroundColor = "#fefefe"
    }
    befnum = num
    console.log({befnum})
}

function placenum(id) {
    if(picknum != 0){
        document.getElementById(id).innerHTML = picknum
    }
}