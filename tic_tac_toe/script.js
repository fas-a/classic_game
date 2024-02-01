let a = 0
let b = 0
let d = [0,0,0,0,0,0,0,0,0]
let c = true
console.log({d})
function add(x) {
    if (d[x] == 0){
        if (c){
            d[x] = 1
        } else {
            d[x] = -1
        }
        console.log({d})
        c = !c
        let win = check()
        console.log({win})
        // if(win == 1){
        //     console.log("1 win")
        // } else if(win == -1){
        //     console.log("-1 win")
        // }
    }
}
function check() {
    for (let i = 0; i < 3; i++) {
        console.log("a")
        if(d[i] == d[i+3] && d[i+3] == d[i+6] && d[i] != 0){
            return d[i]
        }
    }
    for (let i = 0; i < 9; i+=3) {
        console.log("b")
        if(d[i] != 0 && d[i] == d[i+1] && d[i+1] == d[i+2]){
            return d[i]
        }
    }
    if(d[0] == d[4] && d[4] == d[8] && d[0] != 0){
        return d[0]
    }
    console.log("c")
    if(d[2] == d[4] && d[4] == d[6] && d[2] != 0){
        return d[2]
    }
    console.log("d")
    return 0
}