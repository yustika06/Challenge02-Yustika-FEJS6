function checkEmail(email) {
    let mail = new RegExp (/([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)/)
    if (typeof(email)=="string") {
        if (mail.test(email)) {
            return 'VALID'
        } 
        else{
            return 'INVALID'
        }
    } 
    else if (email==null){
        return 'ERROR : EMAILNYA MANA?'
    }
    else {
        return 'ERROR : DATA TIDAK SESUAI'
    }
}
console.log(checkEmail('apranata@binar.co.id')) //valid
console.log(checkEmail('apranta@binar.com'))//valid
console.log(checkEmail('apranta@binar'))//invalid
console.log(checkEmail('apranta'))//invalid
console.log(checkEmail(3322))//ERROR : DATA TIDAK SESUAI
console.log(checkEmail())//ERROR : EMAILNYA MANA?