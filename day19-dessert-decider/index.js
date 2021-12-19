const foodHolder = document.getElementById('foodHolder')
const btn = document.getElementById('btn')
const API_URL = 'https://foodish-api.herokuapp.com/api/images/dessert'

/* Task:
Call the Foodish API (https://foodish-api.herokuapp.com/) and display random images of desserts on the click of a button.

Specific URL to get a random dessert image: 
https://foodish-api.herokuapp.com/api/images/dessert */

const findYum = async () => {
  const response = await fetch(API_URL)
  const data = await response.json()

  foodHolder.innerHTML = ''
  const imgEl = document.createElement('img')
  imgEl.setAttribute('src', data.image)
  imgEl.setAttribute('alt', 'dessert photo')
  foodHolder.appendChild(imgEl)
}

btn.addEventListener('click', findYum)

/* Stretch goals: 
- Show multiple desserts.
- Add the functionality to go back to the previous image.
*/
