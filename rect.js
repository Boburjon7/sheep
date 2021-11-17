let link = ""
while (isNaN(nick) || 0==nick) {
   var nick = +prompt("Son yozing, geometrik shakl korasiz")
}

for (let i = 1; i <= nick; i++) {
    for (let j = 1; j <=nick; j++) {
        if (i==1  || i==nick || j==1 || j==nick ) {
            link +="{*}"
        }else if(i==j){
            link += " B "
        }else{
            link +="   "
        }
        
    }
    console.log(link);
    link = ""
    
}