function getSplitName(personName) {
    let nama = personName
    let result =[]
    if (typeof personName == 'string') {
        if (nama.match(/(\w+)/g).length === 3) {
            result= {firstName: nama.split(" ")[0], middleName: nama.split(" ")[1], lastName: nama.split(" ")[2]};
            return result
        } 
        else if (nama.match(/(\w+)/g).length===2) {
            result= {firstName: nama.split(" ")[0], middleName: "null", lastName: nama.split(" ")[1]};
            return result
        }
        else if(nama.match(/(\w+)/g).length===1){
            result= {firstName: nama.split(" ")[0], middleName: "null", lastName:"null"};
            return result
        }
        else{
            return "ERROR : This Function Only For 3 Characters";
        }
    } 
    else if(typeof personName !== "string"){
        return "ERROR : DATA YANG DIMASUKKAN TIDAK SESUAI";
    }
 
}
console.log(getSplitName("Aldi Daniela Pranata"))
console.log(getSplitName("Dwi Kuncoro"))
console.log(getSplitName("Aurora"))
console.log(getSplitName("Aurora Aureliya Sukma Darma"))
console.log(getSplitName(0))