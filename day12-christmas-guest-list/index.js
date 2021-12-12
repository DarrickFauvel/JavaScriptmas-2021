const input = document.getElementById('input')
const btn = document.getElementById('btn')
let guestList = document.getElementById('guest-list')
const formEl = document.querySelector('form')

let guests = [
  'Partner',
  'Nice Relative 1',
  'Nice Relative 2',
  'Evil Relative',
  'Lonely Neighbour'
]

// Tasks:
// - Write the JS to render the Christmas day guest list in the guest-list element.
// - Add the functionality to add new guests.
const addItemToList = (guest) => {
  if (!guest.trim()) {
    console.log('Please enter a guest name')
    return
  }
  if (guests.includes(guest)) {
    console.log(`Guest '${guest}' is already on the list`)
    return
  }
  guests.push(guest)
  const liEl = document.createElement('li')
  liEl.textContent = guest
  guestList.appendChild(liEl)
  input.value = ''
}

const renderList = () => {
  guests.forEach((guest) => {
    addItemToList(guest)
  })
}

const handleSubmit = (e) => {
  e.preventDefault()
  addItemToList(input.value)
}

const removeLastItem = () => {
  if (guests.length === 0) {
    console.log(`That's all the guests we can remove!`)
    return
  }
  guests.pop()
  guestList.removeChild(guestList.lastElementChild)
}

const createRemoveButton = () => {
  const btnRemove = document.createElement('button')
  btnRemove.setAttribute('type', 'button')
  btnRemove.textContent = `Remove 'em`
  btnRemove.style.backgroundColor = 'var(--bright-red)'
  formEl.appendChild(btnRemove)
  btnRemove.addEventListener('click', removeLastItem)
}

renderList()
createRemoveButton()

// event listeners
btn.addEventListener('click', () => addItemToList(input.value))
formEl.addEventListener('submit', handleSubmit)

// Stretch goals:
// - Add a button to remove the most recently added guests.
// - What about if you want to remove the evil relative?
