// Updates to todays date
const rateDate = document.querySelector('#rate_date')
rateDate.valueAsDate = new Date()

// Creates array with currencies
const arrCurrencies = [
    ['ARSA', 'L_USD_ARS_ASK|0|6|cFrom|cTo|rVal||rDate|Banco Nacion Argentina|', 'USD', 'ARS'],
    ['ARSB', 'L_USD_ARS_BID|0|6|cFrom|cTo|rVal||rDate|Banco Nacion Argentina|', 'USD', 'ARS'],
    ['CLF', 'L_CLF_CLP|0|6|cFrom|cTo|rVal||rDate|Chile&apos Central Bank|', 'CLF', 'CLP'],
    ['COP', 'L_USD_COP|0|6|cFrom|cTo|rVal||rDate|Superintendencia financiera de Colombia|', 'USD', 'COP'],
    ['MXN', 'LOCUSDMXN|0|6|cFrom|cTo|rVal||rDate|Banco de Mexico|', 'USD', 'MXN'],
    ['NGN', 'L_USD_NGN|0|6|cFrom|cTo|rVal||rDate|Central Bank of Nigeria|', 'USD', 'NGN'],
    ['PENA', 'L_USD_PEN_ASK|0|6|cFrom|cTo|rVal||rDate|SBS - Goverment agency Superintendencia de Banca|', 'USD', 'PEN'],
    ['PENB', 'L_USD_PEN_BID|0|6|cFrom|cTo|rVal||rDate|SBS - Goverment agency Superintendencia de Banca|', 'USD', 'PEN'],
    ['VND', 'USDtoVND|0|6|cFrom|cTo|rVal||rDate|JP Morgan Bank|', 'VND', 'USD'],
    ['BRL', 'cTotocFrom|0|6|cFrom|cTo|rVal||rDate|Banco Real|',
        ['BRL', 'USD'],
        ['BRL', 'EUR']
    ],
    ['IDR', 'L_cFrom_IDR|0|6|cFrom|cTo|rVal||rDate|Bank Indonesia|',
        ['SGD', 'IDR'],
        ['USD', 'IDR']
    ],
    ['MAD', 'L_cFrom_MAD|0|6|cFrom|cTo|rVal||rDate|Bank of Morocco|',
        ['USD', 'MAD'],
        ['EUR', 'MAD']
    ],
    ['KRW', 'L_cFrom_KRW|0|6|cFrom|cTo|rVal||rDate|Seoul Money Brokerage Service|',
        ['CNY', 'KRW'],
        ['EUR', 'KRW'],
        ['GBP', 'KRW'],
        ['HKD', 'KRW'],
        ['JPY', 'KRW'],
        ['USD', 'KRW'],
        ['RUB', 'KRW']
    ],
    ['MYR', 'L_cFrom_MYR|0|6|cFrom|cTo|rVal||rDate|Central Bank of Malaysia|',
        ['CNY', 'MYR'],
        ['EUR', 'MYR'],
        ['GBP', 'MYR'],
        ['SGD', 'MYR'],
        ['USD', 'MYR']
    ],
]

// Create array with more information
const arrExtraInfo = [
    ['ARSA', 'LOC_ARS_ASK.OUT'],
    ['ARSB', 'LOC_ARS_BID.OUT'],
    ['CLF', 'LOC_CLF_CLP_MID.OUT'],
    ['COP','LOC_COP_MID.OUT'],
    ['MXN', 'LOC_MXN_MID.OUT'],
    ['NGN','LOC_NGN_MID.OUT' ],
    ['PENA','LOC_PEN_ASK.OUT'],
    ['PENB','LOC_PEN_BID.OUT'],
    ['VND','LOC_VND_MID_MEC.OUT'],
    ['BRL', 'LOC_BRL_MID_MEC.OUT'],
    ['IDR','LOC_IDR_MID.OUT'],
    ['MAD', 'LOC_MAD_MID.OUT'],
    ['KRW','LOC_KRW_MID.OUT'],
    ['MYR','LOC_MYR_MID.OUT']
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
    input1.step = '0.00001'
    divChild.appendChild(input1)
    rowDiv.appendChild(rowSpan1)
    rowDiv.appendChild(rowSpan2)
    rowDiv.appendChild(divChild)
    table.appendChild(rowDiv)
}

// Remove all elements in table
function RemoveElements() {
    const divsInTable = document.querySelectorAll('#gridTable > div')
    divsInTable.forEach(div => {
        if (!(div.classList.value === 'headers')) {
            div.remove()
        }
    })
}

// Populates first element
const selectInput = document.querySelector('#rate_rate')
const currRowStart = arrCurrencies.find(row => {
    return row[0] === selectInput.value
})
CreateNewRowElement(currRowStart[2], currRowStart[3])

// Change table inputs based on selected item
selectInput.addEventListener('change', (evt) => {
    const rateFile = selectInput.value
    RemoveElements()
    let currRow = arrCurrencies.find(row => {
        return row[0] === rateFile
    })

    if (currRow[2].length === 3) {
        CreateNewRowElement(currRow[2], currRow[3])
    } else {
        for (let fromTo of currRow) {
            if (fromTo.length < 3) {
                CreateNewRowElement(fromTo[0], fromTo[1])
            }
        }
    }
})

//Create txt file
const form = document.querySelector('form')

form.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const rateFile = selectInput.value
    const [year,month,day] = rateDate.value.split('-')
    const dateToWrite = `${month}/${day}/${year}`
    const divsInTable = document.querySelectorAll('#gridTable > div')
    let textContent = ''

    // Find currency Row
    const currRow = arrCurrencies.find(row => {
        return row[0] === rateFile
    })

    // Find currency row in extra info
    const currRowExtra = arrExtraInfo.find(row => {
        return row[0] === rateFile
    })

    if (currRow[2].length === 3) {
        textContent = currRow[1]
        textContent = textContent.replaceAll('cFrom', currRow[2])
        textContent = textContent.replaceAll('cTo', currRow[3])
        textContent = textContent.replaceAll('rVal', divsInTable[1].querySelector('input').value)
        textContent = textContent.replaceAll('rDate', dateToWrite)
    } else {
        currRow.forEach((currElement, i) => {
            if (i > 1) {
                textContent += currRow[1]
                textContent = textContent.replaceAll('cFrom', currElement[0])
                textContent = textContent.replaceAll('cTo', currElement[1])
                textContent = textContent.replaceAll('rVal', divsInTable[i - 1].querySelector('input').value)
                textContent = textContent.replaceAll('rDate', dateToWrite)
                if (i < currRow.length - 1) {
                    textContent += '\r\n'
                }
            }
        })
    }

    // Creates a file and downloads it
    const blob = new Blob([textContent], {type: 'text/pain'})
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    // link.download = 'rate.txt'
    link.download = currRowExtra[1]
    link.click()

    divsInTable.forEach((ele,i) =>{
        if (i>0){
            ele.querySelector('input').value = ''
        }
    })
})