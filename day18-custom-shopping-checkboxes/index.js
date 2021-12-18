const items = ['Candles', 'Decorations', 'Chocolate']
const checklist = document.getElementById('checklist')

for (let i = 0; i < items.length; i++) {
  checklist.innerHTML += /*html*/ `
         <div class="checklist-item">
            <label class="container" for="${items[i]}">
                <input type="checkbox" id="${items[i]}" value="${items[i]}" />
                <span class="checkmark"></span><span class="item-text strikethrough">${items[i]}</span>
            </label>
        </div>
    `
}
