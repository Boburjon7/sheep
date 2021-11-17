    while (isNaN(k) || k==0) {
    var k = +prompt("Nechta misol yecholisiz")
    }

for (let i = 0; i < k; i++) {
    

    function radom() {
        let a = Math.round(Math.random()*10)
        if (a>=9) {
            b ='%'
        }else if (a>=7) {
            b ='/'
        }else if (a>=5) {
            b ='-'
        }else if (a>=3) {
            b ='+'
        }else if(a>=1) {
            b ='*'
        }

        let c = Math.round(Math.random()*10)
        return a + b + c
    }

    +prompt(radom())
    

}

alert("Yomon emas hisoblashni bilarakansiz ")

    
