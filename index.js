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
    if (rateFile === 'ARSA' || rateFile === 'ARSB'){
        from1.innerHTML = 'USD'
        to1.innerHTML = 'ARS'
    }
    if (rateFile === 'CLF'){
        from1.innerHTML = 'CLF'
        to1.innerHTML = 'CLP'
    }
    if (rateFile === 'COP'){
        from1.innerHTML = 'USD'
        to1.innerHTML = 'COP'
    }
    if (rateFile === 'MXN'){
        from1.innerHTML = 'USD'
        to1.innerHTML = 'MXN'
    }
    if (rateFile === 'NGN'){
        from1.innerHTML = 'USD'
        to1.innerHTML = 'NGN'
    }
    if (rateFile === 'PENA' || rateFile === 'PENB'){
        from1.innerHTML = 'USD'
        to1.innerHTML = 'PEN'
    }
    if (rateFile === 'VND'){
        from1.innerHTML = 'VND'
        to1.innerHTML = 'USD'
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