const niceList = document.getElementById('nice-list')
const naughtyList = document.getElementById('naughty-list')
const btn = document.getElementById('btn')

const sorteesArr = [
  {
    name: 'David',
    hasBeenGood: false
  },
  {
    name: 'Del',
    hasBeenGood: true
  },
  {
    name: 'Valerie',
    hasBeenGood: false
  },
  {
    name: 'Astrid',
    hasBeenGood: true
  }
]

// Task:
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists,
//   according to whether they have been good or not. Then display the names in the relevant place in the DOM.
const createListItem = (name) => {
  const liEl = document.createElement('li')
  liEl.textContent = name
  return liEl
}

const sortList = () => {
  sorteesArr.forEach((item) => {
    if (item.hasBeenGood) {
      niceList.appendChild(createListItem(item.name))
    } else {
      naughtyList.appendChild(createListItem(item.name))
    }
  })
}

btn.addEventListener('click', sortList)

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.
