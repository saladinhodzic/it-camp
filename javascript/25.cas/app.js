function kombinacija(str1,str2){
    let noviStr = ""
    let duziString = str1.length>str2.length? str1.length:str2.length

    for(i=0;i<duziString;i++){
        if(str1[i] === undefined){
            noviStr+=str2[i]
        }else if(!str2[i]){
            noviStr+=str1[i]
        }
       else {noviStr+=str1[i]+str2[i]}
    }
    

    return noviStr

}

console.log(kombinacija('pera','sladoled'))