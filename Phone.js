function createPhoneNumber (number){
    let areaCode = ''
    let secondPart = ''
    let thirdPart = ''
    
    for(i = 0; i < number.length; i++){
        if (i < 3) {
            areaCode += number[i]
        } else if (i >= 3 && i < 6) {
            secondPart += number[i]

        } else if (i >= 6){
            thirdPart += number[i]
        }

    }
    return `(${areaCode}) ${secondPart}-${thirdPart}`


}
console.log(createPhoneNumber('4732437432'));
