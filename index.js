let clipEle = document.getElementById('clipboard')
console.log(clipEle)
let lengthEle = document.getElementById('length')
console.log(lengthEle)
let uppercaseEle = document.getElementById('uppercase')
console.log(uppercaseEle)
let lowercaseEle = document.getElementById('lowercase')
console.log(lowercaseEle)
let numbersEle = document.getElementById('numbers')
console.log(numbersEle)
let symbolsEle = document.getElementById('symbols')
console.log(symbolsEle)
let generateEle = document.getElementById('generate')
console.log(generateEle)
let resultEle = document.getElementById('result')
console.log(resultEle)

clipEle.addEventListener('click', ()=>{
    let textarea = document.createElement('textarea')
    let password = resultEle.innerText

    if(!password){
        return ''
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied')
})

generateEle.addEventListener('click', generatePassword)

const randomFun = {
    lower : getRandomLower,
    upper : getRandomUpper,
    number : getRandomNumber,
    symbol : getRandomSymbol
}


function generatePassword() {

    let upper = uppercaseEle.checked
    let lower = lowercaseEle.checked
    let number = numbersEle.checked
    let symbol = symbolsEle.checked
    let len = +lengthEle.value


    console.log(upper, lower, number, symbol, len)

    resultEle.innerText = getPassword(upper, lower, number, symbol, len)

}

function getPassword(upper, lower, number, symbol, len){

    let password  = ''

    const typeCount = upper + lower + number + symbol
    console.log(typeCount)

    const typeArray = [{upper}, {lower}, {number}, {symbol}].filter(item => Object.values(item)[0])
    console.log(typeArray)

    if(typeCount === 0){
        return ''
    }

    for(let i=0 ; i < len ; i+=typeCount ){
        typeArray.forEach(element => {
            const funcname = Object.keys(element)[0]

            // console.log(funcname)
            password += randomFun[funcname]()
        });
    }
    const final = password.slice(0, len)

    return final
}


function getRandomLower() {
    return String.fromCharCode(Math.floor((Math.random() * 26 + 97)))
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor((Math.random() * 26 + 65)))
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor((Math.random() * 10 + 48)))
}

function getRandomSymbol() {
    const s = '~!`@#$%^&*()_+.'
    return s[Math.floor(Math.random() * s.length)]
}
