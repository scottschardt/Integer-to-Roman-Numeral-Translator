
function assertEquals(actual, expected){
    if(actual == expected){
        console.log(`Test Passed! Actual: ${actual} - Expected: ${expected}`)
    } else {
        console.log(`Test Failed! Actual: ${actual} - Expected: ${expected}`)
    }
}

var RomanNumeral = function() {
}

var getNumeralObject = function(int, romanNumeral) {
    return {value: int, numeral: romanNumeral}
}

var numeralArray = function(){
    let numeralArray = [];
    numeralArray.push(getNumeralObject(1000, "M"));
    numeralArray.push(getNumeralObject(900, "CM"));
    numeralArray.push(getNumeralObject(500, "D"));
    numeralArray.push(getNumeralObject(400, "CD"));
    numeralArray.push(getNumeralObject(100, "C"));
    numeralArray.push(getNumeralObject(90, "XC"));
    numeralArray.push(getNumeralObject(50, "L"));
    numeralArray.push(getNumeralObject(40, "XL"));
    numeralArray.push(getNumeralObject(10, "X"));
    numeralArray.push(getNumeralObject(9, "IX"));
    numeralArray.push(getNumeralObject(5, "V"));
    numeralArray.push(getNumeralObject(4, "IV"));
    numeralArray.push(getNumeralObject(1, "I"));
    return numeralArray;
}

RomanNumeral.prototype.translator = function (int) {
    let romanNumeralString = "";
    numeralArray().forEach((item) => {
        for(; int >= item.value; int -= item.value){
            romanNumeralString += item.numeral;
        }
    })
    return romanNumeralString
}



let getRomanNumeral = new RomanNumeral();

assertEquals(getRomanNumeral.translator(1), "I")
assertEquals(getRomanNumeral.translator(2), "II")
assertEquals(getRomanNumeral.translator(3), "III")
assertEquals(getRomanNumeral.translator(4), "IV")
assertEquals(getRomanNumeral.translator(9), "IX")
assertEquals(getRomanNumeral.translator(20), "XX")
assertEquals(getRomanNumeral.translator(1956), "MCMLVI")


