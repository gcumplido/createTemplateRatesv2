// Updates to todays date
const rateDate = document.querySelector('#rate_date')
rateDate.valueAsDate = new Date()

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