let num = +prompt("Gruppadagi bollarni sanang")
let sheep = ''

for (let i = 1; i <=num; i++) {
    sheep+=i
    if (1==sheep) {
        sheep +=' qoy '
    }else if (2<=num) {
        sheep+=' qoylar '
    }
    
}

console.log("Result: " + sheep);