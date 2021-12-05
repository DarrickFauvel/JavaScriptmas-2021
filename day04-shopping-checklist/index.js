const items = ['Candles', 'Decorations', 'Chocolate']
const checklist = document.getElementById('checklist')

// Tasks:
// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.
const renderChecklist = () => {
  let htmlContent = ''
  items.forEach((item) => {
    htmlContent += `<div class='checklist-item'>
        <label for='${item}'><input type="checkbox" id='${item}' /> ${item}</label>
        </div>`
  })
  checklist.innerHTML = htmlContent
}

// Stretch goals:
// - Add an input which allows the user to add more items.
const renderForm = () => {
  const formEl = document.createElement('form')
  const inputAdd = document.createElement('input')
  inputAdd.type = 'text'
  inputAdd.setAttribute('id', 'input-add')
  inputAdd.setAttribute('placeholder', 'Enter item...')
  formEl.appendChild(inputAdd)

  const buttonAdd = document.createElement('button')
  buttonAdd.textContent = 'Add'
  buttonAdd.addEventListener('click', (e) => {
    e.preventDefault()
    if (inputAdd.value) {
      items.push(inputAdd.value)
      inputAdd.value = ''
      inputAdd.focus()
renderChecklist()
    }
    inputAdd.focus()
  })
  formEl.appendChild(buttonAdd)

  checklist.insertAdjacentElement('beforebegin', formEl)
  inputAdd.focus()
}

// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.
