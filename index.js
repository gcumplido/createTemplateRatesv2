// Updates to todays date
const rateDate = document.querySelector('#rate_date')
rateDate.valueAsDate = new Date()

// Change table inputs based on selecte item
const selectInput = document.querySelector('#rate_rate')
const from1 = document.querySelector('#from1')
const to1 = document.querySelector('#to1')
const divRate2 = document.querySelector('.rowRate2')
selectInput.addEventListener('change',(evt)=>{
    const rateFile = selectInput.value
    if (['ARSA','ARSB','CLF','COP','MXN','NGN','PENA','PENB','VND'].includes(rateFile)){
        divRate2.style.display = 'none'
    }else if (['BRL','IDR','MAD'].includes(rateFile)){
        divRate2.style.display = 'grid'
    }

    switch (rateFile) {
        case 'ARSA':
        case 'ARSB':
            from1.innerHTML = 'USD'
            to1.innerHTML = 'ARS'
            break
        case 'CLF':
            from1.innerHTML = 'CLF'
            to1.innerHTML = 'CLP'
            break
        case 'COP':
            from1.innerHTML = 'USD'
            to1.innerHTML = 'COP'
            break
        case 'MXN':
            from1.innerHTML = 'USD'
            to1.innerHTML = 'MXN'
            break
        case 'NGN':
            from1.innerHTML = 'USD'
            to1.innerHTML = 'NGN'
            break
        case 'PENA':
        case 'PENB':
            from1.innerHTML = 'USD'
            to1.innerHTML = 'PEN'
            break
        case 'VND':
            from1.innerHTML = 'VND'
            to1.innerHTML = 'USD'
            break
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