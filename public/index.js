// Updates to todays date
const rateDate = document.querySelector('#rate_date')
rateDate.valueAsDate = new Date()

// Creates array with currencies
// Step 1 of 3 to add new currency file, define the file structure and rates needed
const arrCurrencies = [
    ['ARSA', 'L_USD_ARS_ASK|0|6|cFrom|cTo|rVal||rDate|Banco Nacion Argentina|', 'USD', 'ARS'],
    ['ARSB', 'L_USD_ARS_BID|0|6|cFrom|cTo|rVal||rDate|Banco Nacion Argentina|', 'USD', 'ARS'],
    ['CLF', 'L_CLF_CLP|0|6|cFrom|cTo|rVal||rDate|Chile&apos Central Bank|', 'CLF', 'CLP'],
    ['COP', 'L_USD_COP|0|6|cFrom|cTo|rVal||rDate|Superintendencia financiera de Colombia|', 'USD', 'COP'],
    ['MXN', 'LOCUSDMXN|0|6|cFrom|cTo|rVal||rDate|Banco de Mexico|', 'USD', 'MXN'],
    ['NGN', 'L_USD_NGN|0|6|cFrom|cTo|rVal||rDate|Central Bank of Nigeria|', 'USD', 'NGN'],
    ['PENA', 'L_USD_PEN_ASK|0|6|cFrom|cTo|rVal||rDate|SBS - Goverment agency Superintendencia de Banca|', 'USD', 'PEN'],
    ['PENB', 'L_USD_PEN_BID|0|6|cFrom|cTo|rVal||rDate|SBS - Goverment agency Superintendencia de Banca|', 'USD', 'PEN'],
    ['VNDM', 'USDtoVND|0|6|cFrom|cTo|rVal||rDate|JP Morgan Bank|', 'VND', 'USD'],
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
    ['EUR','EUCFcFrom|0|6|cFrom|cTo|rVal||rDate|European Central Bank|',
        ['BGN', 'EUR'],
        ['CZK', 'EUR'],
        ['DKK', 'EUR'],
        ['HUF', 'EUR'],
        ['PLN', 'EUR'],
        ['RON', 'EUR'],
        ['NOK', 'EUR'],
        ['HRK', 'EUR'],
        ['TRY', 'EUR'],
        ['SGD', 'EUR'],
        ['THB', 'EUR'],
        ['ILS', 'EUR']
    ],
    ['NZD','NZDcTo|0|6|cFrom|cTo|rVal||rDate|New Zealand Central Bank|',
        ['NZD', 'AUD'],
        ['NZD', 'CHF'],
        ['NZD', 'EUR'],
        ['NZD', 'GBP'],
        ['NZD', 'JPY'],
        ['NZD', 'USD']
    ],
    ['SEK','L_cFrom_SEK|0|6|cFrom|cTo|rVal||rDate|SVERIGES RIKSBANK|',
        ['EUR', 'SEK'],
        ['USD', 'SEK']
    ],
    ['VND','USDVND|0|6|cFrom|cTo|rVal||rDate|State Bank of Vietnam (SBV)|', 'USD', 'VND'],
    ['NGNM','NGN_USD_MID_MEC|0|6|cFrom|cTo|rVal||rDate|Central Bank of Nigeria|', 'USD', 'NGN'],
    ['GLA','cTocFrom|0|6|cFrom|cTo|rVal||rDate|various|',
        ['VND','USD'],
        ['KRW','USD'],
        ['MYR','USD'],
        ['CAD','USD'],
        ['NOK','USD'],
        ['SEK','USD'],
        ['CHF','USD'],
        ['HKD','USD'],
        ['GBP','USD'],
        ['CLP','USD'],
        ['ARS','USD'],
        ['COP','USD'],
        ['DKK','USD'],
        ['EUR','USD'],
        ['HUF','USD'],
        ['MXN','USD'],
        ['PEN','USD'],
        ['PLN','USD'],
        ['RUB','USD'],
        ['ZAR','USD'],
        ['CZK','USD'],
        ['AUD','USD'],
        ['PHP','USD'],
        ['CNY','USD'],
        ['IDR','USD'],
        ['INR','USD'],
        ['BRL','USD'],
        ['JPY','USD'],
        ['SGD','USD'],
        ['TWD','USD'],
        ['THB','USD'],
        ['NZD','USD']
    ],
    ['IPG','cTocFrom|0|6|cFrom|cTo|rVal||rDate|various|',
        ['KRW','USD'],
        ['MYR','USD'],
        ['THB','USD'],
        ['BRL','USD'],
        ['CAD','USD'],
        ['NOK','USD'],
        ['SEK','USD'],
        ['VND','USD'],
        ['CHF','USD'],
        ['JPY','USD'],
        ['TWD','USD'],
        ['HKD','USD'],
        ['GBP','USD'],
        ['CLP','USD'],
        ['ARS','USD'],
        ['COP','USD'],
        ['DKK','USD'],
        ['EUR','USD'],
        ['HUF','USD'],
        ['MXN','USD'],
        ['PEN','USD'],
        ['PLN','USD'],
        ['NZD','USD'],
        ['SGD','USD'],
        ['RUB','USD'],
        ['ZAR','USD'],
        ['CZK','USD'],
        ['AUD','USD'],
        ['PHP','USD'],
        ['CNY','USD'],
        ['IDR','USD'],
        ['INR','USD']
    ],
    ['PSG','cTocFrom|0|6|cFrom|cTo|rVal||rDate|various|',
        ['RUB','USD'],
        ['JPY','USD'],
        ['TWD','USD'],
        ['CHF','USD'],
        ['DKK','USD'],
        ['EUR','USD'],
        ['GBP','USD'],
        ['BRL','USD'],
        ['KRW','USD'],
        ['MYR','USD'],
        ['THB','USD'],
        ['CAD','USD'],
        ['NOK','USD'],
        ['SEK','USD'],
        ['VND','USD'],
        ['HKD','USD'],
        ['CLP','USD'],
        ['ARS','USD'],
        ['COP','USD'],
        ['HUF','USD'],
        ['MXN','USD'],
        ['PEN','USD'],
        ['PLN','USD'],
        ['ZAR','USD'],
        ['CZK','USD'],
        ['AUD','USD'],
        ['PHP','USD'],
        ['CNY','USD'],
        ['IDR','USD'],
        ['INR','USD'],
        ['NZD','USD'],
        ['SGD','USD']
    ],
    ['SUP','cTocFrom|0|6|cFrom|cTo|rVal||rDate|various|',
        ['KRW','USD'],
        ['MYR','USD'],
        ['THB','USD'],
        ['CAD','USD'],
        ['BRL','USD'],
        ['VND','USD'],
        ['HKD','USD'],
        ['CLP','USD'],
        ['MXN','USD'],
        ['JPY','USD'],
        ['TWD','USD'],
        ['AUD','USD'],
        ['PHP','USD'],
        ['CNY','USD'],
        ['IDR','USD'],
        ['INR','USD'],
        ['EUR','USD'],
        ['NZD','USD'],
        ['SGD','USD']
    ],
    ['ECB','cTocFrom|0|6|cFrom|cTo|rVal||rDate|various|',
        ['CAD','USD'],
        ['AUD','USD'],
        ['CNY','USD'],
        ['HKD','USD'],
        ['IDR','USD'],
        ['INR','USD'],
        ['JPY','USD'],
        ['KRW','USD'],
        ['MYR','USD'],
        ['NZD','USD'],
        ['PHP','USD'],
        ['SGD','USD'],
        ['TWD','USD'],
        ['THB','USD'],
        ['VND','USD'],
        ['CHF','USD'],
        ['CZK','USD'],
        ['DKK','USD'],
        ['EUR','USD'],
        ['GBP','USD'],
        ['HUF','USD'],
        ['NOK','USD'],
        ['PLN','USD'],
        ['RUB','USD'],
        ['SEK','USD'],
        ['ZAR','USD'],
        ['ARS','USD'],
        ['BRL','USD'],
        ['CLP','USD'],
        ['COP','USD'],
        ['MXN','USD'],
        ['PEN','USD']
    ]
]

// Create array with more information
// step 2 of 3 to add new currency file, define the output file name
const arrExtraInfo = [
    ['ARSA', 'LOC_ARS_ASK.OUT'],
    ['ARSB', 'LOC_ARS_BID.OUT'],
    ['CLF', 'LOC_CLF_CLP_MID.OUT'],
    ['COP','LOC_COP_MID.OUT'],
    ['MXN', 'LOC_MXN_MID.OUT'],
    ['NGN','LOC_NGN_MID.OUT' ],
    ['PENA','LOC_PEN_ASK.OUT'],
    ['PENB','LOC_PEN_BID.OUT'],
    ['VNDM','LOC_VND_MID_MEC.OUT'],
    ['BRL', 'LOC_BRL_MID_MEC.OUT'],
    ['IDR','LOC_IDR_MID.OUT'],
    ['MAD', 'LOC_MAD_MID.OUT'],
    ['KRW','LOC_KRW_MID.OUT'],
    ['MYR','LOC_MYR_MID.OUT'],
    ['EUR', 'LOC_EUR_MID.OUT'],
    ['NZD', 'LOC_NZD_MID.OUT'],
    ['SEK', 'LOC_SEK_MID.OUT'],
    ['VND', 'LOC_VND_MID.OUT'],
    ['NGNM', 'LOC_NGN_MID_MEC.OUT'],
    ['GLA', 'LOC_GLA_MID.OUT'],
    ['IPG', 'LOC_IPG_MID.OUT'],
    ['PSG', 'LOC_PSG_MID.OUT'],
    ['SUP', 'LOC_SUP_MID.OUT'],
    ['ECB', 'LOC_ECB_MID.OUT']
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
        textContent = textContent.replaceAll('rVal', parseFloat(divsInTable[1].querySelector('input').value).toFixed(6))
        textContent = textContent.replaceAll('rDate', dateToWrite)
    } else {
        currRow.forEach((currElement, i) => {
            if (i > 1) {
                //Skips lines with no values
                let rateValue = divsInTable[i - 1].querySelector('input').value
                
                if (rateValue !== '') {
                    textContent += currRow[1]
                    textContent = textContent.replaceAll('cFrom', currElement[0])
                    textContent = textContent.replaceAll('cTo', currElement[1])
                    textContent = textContent.replaceAll('rVal', parseFloat(rateValue).toFixed(6))
                    textContent = textContent.replaceAll('rDate', dateToWrite)
                    if (i < currRow.length - 1) {
                        textContent += '\r\n'
                    }
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