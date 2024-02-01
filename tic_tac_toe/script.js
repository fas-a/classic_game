let a = 0
let b = 0
let d = [[0,0,0],[0,0,0],[0,0,0]]
let c = true
console.log({d})
function add(x,y) {
    if (d[x][y] == 0){
        if (c){
            d[x][y] = 1
        } else {
            d[x][y] = -1
        }
        console.log({d})
        c = !c   
    }
}