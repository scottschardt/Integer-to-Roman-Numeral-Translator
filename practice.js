
class RomanNumeral {
    constructor(){
      this.four = 'IV',
      this.nine = 'IX',
      this.forty = 'XL',
      this.ninety = 'XC',
      this.fourhundred = 'CD',
      this.ninehundred = 'CM'
    }
    
    getOddNumbers(int){
        let romanNumeralString = "";
        romanNumeralString = int == 4 ? this.four: romanNumeralString
        romanNumeralString = int == 9 ? this.nine: romanNumeralString
        romanNumeralString = int == 40 ? this.forty: romanNumeralString
        romanNumeralString = int == 90 ? this.ninety: romanNumeralString
        romanNumeralString = int == 400 ? this.fourhundred: romanNumeralString
        romanNumeralString = int == 900 ? this.ninehundred: romanNumeralString
        return romanNumeralString
    }
}
let x = 39809;
console.log(x.toString().length)

function getRomanNumeral(int) {
    let romanNumeralArray = ["M", "D", "C", "L", "X", "V", "I"];
    let romanNumeralValueArray = [1000, 500, 100, 50, 10, 5, 1];
    let result = "";
    let original = int;
    let romanObject = new RomanNumeral();
    if(int == '' || int == null || int == undefined || typeof int === "string" || int == 0) {
        return result = "Not able to get Roman Numeral"
    } else {
        for(let i = 0; i < romanNumeralArray.length;i++){
            if(original/romanNumeralValueArray[i] >= 1){
                let quotient = (original/romanNumeralValueArray[i]);
                let integer = Math.floor(quotient);
                if(quotient >= 1.8 && quotient < 2 || integer == 4 && original < 9000) {
                    let originalString = original.toString();
                    let originalStringLength = originalString.length;
                    let firstInt = originalString.substring(0, 1);
                    let factor = parseInt(firstInt, 10);
                    let number = factor * (10**(originalStringLength-1));
                    
                    let oddNumber = romanObject.getOddNumbers(number);
                    result += oddNumber;
                    original -= number;
                } else {
                        original -= (integer*romanNumeralValueArray[i]);
                        result += romanNumeralArray[i].repeat(integer)
                }
            }
        }
    }
    return result;
}



let test = (component, fn, count =1) => {
    console.log(`#${component} Test` );
    let unitTest = (actual, expected, msg) => {
        if(actual === expected){
            console.log(`#${count} test passed! ${msg}. Actual: ${actual} - Expected: ${expected}`)
        } else {
            console.log(`#${count} test failed! ${msg}. Actual: ${actual} - Expected: ${expected}`)
        }
        count++
    }
    fn(unitTest);
}

test('RomanNumeral Translator', assert => {
    {
        const msg = 'Get a Roman Numerals 1 through 3';
        const actual = getRomanNumeral(3);
        const expected = "III";
        assert(actual, expected, msg);
    }
    {
        const msg = 'return a roman numeral for all numbers excluding those with a 4 or 9';
        const actual = getRomanNumeral(853);
        const expected = "DCCCLIII";
        assert(actual, expected, msg);
    }
    {
        const msg = 'return a roman numeral for all numbers';
        const actual = getRomanNumeral(900);
        const expected = "CM";
        assert(actual, expected, msg);
    }
    {
        const msg = 'testing odd numbers';
        const actual = getRomanNumeral(9);
        const expected = "IX";
        assert(actual, expected, msg);
    }
    {
        const msg = 'testing odd numbers';
        const actual = getRomanNumeral(4);
        const expected = "IV";
        assert(actual, expected, msg);
    }
    {
        const msg = 'testing odd numbers';
        const actual = getRomanNumeral(999);
        const expected = "CMXCIX";
        assert(actual, expected, msg);
    }
    {
        const msg = 'testing edge cases';
        const actual = getRomanNumeral("a;skdfj asd");
        const expected = "Not able to get Roman Numeral";
        assert(actual, expected, msg);
    }
    {
        const msg = 'testing edge cases';
        const actual = getRomanNumeral(0);
        const expected = "Not able to get Roman Numeral";
        assert(actual, expected, msg);
    }
    {
        const msg = 'testing edge cases';
        const actual = getRomanNumeral(0);
        const expected = "Not able to get Roman Numeral";
        assert(actual, expected, msg);
    }

    
})


