const pageForm = document.getElementById('idForm') // il tag <form>
pageForm.addEventListener('submit', function (e) {
    e.preventDefault()

    const nameInputField = document.getElementById('name')
    console.log(nameInputField.value)

    const userName = document.createElement('div')


    userName.innerHTML = `
    <p>${nameInputField.value}</p>
   
`
const nameSection = document.getElementById('nameId')
nameSection.appendChild(userName) 
 

nameInputField.value = ''
})







