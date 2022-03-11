function checkTypeNumber(givenNumber){
    if(typeof(givenNumber)=='number'){
        if(givenNumber%2==1){
          return 'Ganjil'
        }
        else{
          return 'Genap'
    }
    }
    else if(givenNumber==null){
        return 'Bro where is the parameter?'
    }
    else{
        return 'Error: data invalid'
    }
}
console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())