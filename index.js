const form = document.querySelector('#cosinus_form')
const resultContainer = document.querySelector('#result_container')
form.addEventListener('submit', handleFormSubmit)


function handleFormSubmit(e) {
    e.preventDefault()
    const decimals = parseInt(document.querySelector('#input_decimals').value)
    const input = document.querySelector('#input_cosinus')

    const value = parseFloat(input.value)
    const rad = Math.acos(value)
    const deg = rad / (Math.PI / 180)

    const row = document.createElement('div')
    const cosSpan = document.createElement('span')
    const angleSpan = document.createElement('span')

    row.classList.add('row')
    cosSpan.classList.add('cos_value')
    angleSpan.classList.add('res_value')
    cosSpan.innerText = value.toString()
    angleSpan.innerText = `${deg.toFixed(decimals)}°`
    row.appendChild(cosSpan)
    row.appendChild(angleSpan)
    resultContainer.appendChild(row)
}