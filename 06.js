function  getAngkaTerbesarKedua(Angka) {
    if(Angka){
        let dataYangDifilter = []
        for(let i of Angka) {
            if(dataYangDifilter.indexOf(i) === -1) {
                dataYangDifilter.push(i);
            }
        }
        let dataYangDisort = dataYangDifilter.sort((a, b) => b - a)   
        return dataYangDisort[1] 
    }
    else if (Angka==null){
        return 'ERROR : DATANYA MANA?'
    }
    else {
        return 'ERROR : DATA TIDAK SESUAI'
    }
}

const dataAngka = [9,4,7,7,4,3,2,2,8]

console.log(getAngkaTerbesarKedua(dataAngka)) //output : 8
console.log(getAngkaTerbesarKedua(0)) //output : error : DATA TIDAK SESUAI
console.log(getAngkaTerbesarKedua()) //output : error : DATANYA MANA?