// Updates to todays date
const rateDate = document.querySelector('#rate_date')
rateDate.valueAsDate = new Date()

// Creates arry with currencies
const arrCurrencies = [
    ['ARSA','USD','ARS'],
    ['ARSB','USD','ARS'],
    ['CLF','CLF','CLP'],
    ['COP','USD','COP'],
    ['MXN','USD','MXN'],
    ['NGN','USD','NGN'],
    ['PENA','USD','PEN'],
    ['PENB','USD','PEN'],
    ['VND','VND','USD'],
    ['BRL',
        ['BRL','USD'],
        ['BRL','EUR']
    ],
    ['IDR',
        ['SGD','IDR'],
        ['USD','IDR']
    ],
    ['MAD',
        ['USD','MAD'],
        ['EUR','MAD']
    ],
    ['KRW',
        ['CNY','KRW'],
        ['EUR','KRW'],
        ['GBP','KRW'],
        ['HKD','KRW'],
        ['JPY','KRW'],
        ['USD','KRW'],
        ['RUB','KRW']
    ],
    ['MYR',
        ['CNY','MYR'],
        ['EUR','MYR'],
        ['GBP','MYR'],
        ['SGD','MYR'],
        ['USD','MYR']
    ],
]

// Creates elements based on the array
function CreateNewRowElement(curFrom, curTo) {
    const rowDiv = document.createElement('div')
    const rowSpan1 = document.createElement('span')
    const rowSpan2 = document.createElement('span')
    const divChild = document.createElement('div')
    const input1 = document.createElement('input')
    const table = document.querySelector('#gridTable')
    rowSpan1.innerHTML = curFrom
    rowSpan2.innerHTML = curTo
    input1.type = 'number'
    input1.step = '0.0001'
    divChild.appendChild(input1)
    rowDiv.appendChild(rowSpan1)
    rowDiv.appendChild(rowSpan2)
    rowDiv.appendChild(divChild)
    table.appendChild(rowDiv)
}

// Remove all elements in table
function RemoveElements() {
    const divsInTable = document.querySelectorAll('#gridTable > div')
    divsInTable.forEach(div =>{
        if (!(div.classList.value === 'headers')){
            div.remove()
        }
    })
}

// Populates first element
const selectInput = document.querySelector('#rate_rate')
const currRowStart = arrCurrencies.find(row =>{
    return row[0] === selectInput.value
})
CreateNewRowElement(currRowStart[1],currRowStart[2])

// Change table inputs based on selected item
selectInput.addEventListener('change',(evt)=>{
    const rateFile = selectInput.value
    RemoveElements()
    let currRow = arrCurrencies.find(row =>{
        return row[0] === rateFile
    })

    if (currRow[1].length === 3) {
        CreateNewRowElement(currRow[1],currRow[2])
    }else{
        for (let fromTo of currRow){
            if (fromTo.length < 3){
                CreateNewRowElement(fromTo[0],fromTo[1])
            }
        }
    }
})

//Create txt file
const form = document.querySelector('form')
const rateId = document.querySelector('#rate_rate')
const rateVal = document.querySelector('#rate1')

form.addEventListener('submit',(evt)=>{
    evt.preventDefault()
    const textContent = `Hola mi nombre es gus ${rateVal.value}`
    const blob = new Blob([textContent],{type: 'text/pain'})

    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = 'rate.txt'

    link.click()
    rateVal.value = ''
})