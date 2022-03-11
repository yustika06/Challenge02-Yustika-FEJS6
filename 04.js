function isValidPassword(password) {
    let passRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)
    if (typeof password == "string"){
        if (passRegex.test(password)) {
            return 'TRUE'
        }   
        else {
            return 'FALSE'
        }
    }
    else if (password==null){
        return 'ERROR : PASSWORDNYA MANA?'
    }
    else {
        return 'ERROR : DATA TIDAK SESUAI'
    }

}
console.log(isValidPassword('Meong2021')) //TRUE
console.log(isValidPassword('meong2021')) //FALSE
console.log(isValidPassword('@eong')) //FALSE
console.log(isValidPassword('Meong2')) //FALSE
console.log(isValidPassword(0)) //ERROR : DATA TIDAK SESUAI
console.log(isValidPassword()) //ERROR : PASSWORDNYA MANA?
