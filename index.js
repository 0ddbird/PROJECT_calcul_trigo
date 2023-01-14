const decimals = parseInt(document.querySelector('#input_decimals').value)
const cosForm = document.querySelector('#cosinus_form')
const sinForm = document.querySelector('#sinus_form')
const tanForm = document.querySelector('#tangente_form')
const angForm = document.querySelector('#angle_form')
const resultContainer = document.querySelector('#result_container')

cosForm.addEventListener('submit', handleCosFormSubmit)
sinForm.addEventListener('submit', handleSinFormSubmit)
tanForm.addEventListener('submit', handleTanFormSubmit)
angForm.addEventListener('submit', handleAngFormSubmit)

const toDeg = (radA) => radA / (Math.PI / 180)

function handleCosFormSubmit(e) {
    e.preventDefault()
    const input = parseFloat(document.querySelector('#input_cosinus').value)
    const rad = Math.acos(input)
    const deg = toDeg(rad)
    const result = `${deg.toFixed(decimals)}°`
    appendResult('Cos > Angle (deg)', input.toString(), result)
}

function handleSinFormSubmit(e) {
    e.preventDefault()
    const input = parseFloat(document.querySelector('#input_sinus').value)
    const rad = Math.asin(input)
    const deg = toDeg(rad)
    const result = `${deg.toFixed(decimals)}°`
    appendResult('Sin > Angle (deg)', input.toString(), result)
}

function handleTanFormSubmit(e) {
    e.preventDefault()
    const input = parseFloat(document.querySelector('#input_tangente').value)
    const rad = Math.atan(input)
    const deg = toDeg(rad)
    const result = `${deg.toFixed(decimals)}°`
    appendResult('Tan > Angle (deg)', input.toString(), result)

}

function handleAngFormSubmit(e) {
    e.preventDefault()
    const input = parseFloat(document.querySelector('#input_angle').value)
    const sin = Math.sin(input).toFixed(decimals)
    const cos = Math.cos(input).toFixed(decimals)
    const tan = Math.tan(input).toFixed(decimals)
    const result = `Cosinus : ${cos}, Sinus : ${sin}, Tangente : ${tan}`
    appendResult('Angle', `${input}°`, result)
}

function appendResult(cat, inpt, res) {
    const row = document.createElement('div')
    const catSpan = document.createElement('span')
    const inputSpan = document.createElement('span')
    const resultSpan = document.createElement('span')

    row.classList.add('row')
    catSpan.classList.add('category')
    inputSpan.classList.add('input_value')
    resultSpan.classList.add('res_value')
    catSpan.innerText = cat
    inputSpan.innerText = inpt
    resultSpan.innerText = res

    row.appendChild(catSpan)
    row.appendChild(inputSpan)
    row.appendChild(resultSpan)
    resultContainer.appendChild(row)
}